import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../store/auth-context";
import { useNotificationContext, types } from "../store/notification-context";
import * as userService from "../services/user";
import { validationSchema, errorMessages } from "../helpers/helpers";

import { Formik } from "formik";

import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { addNotification } = useNotificationContext();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = (event) => {
    event.preventDefault();
    setIsLogin((oldState) => !oldState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let { email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    const userPayload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    setIsLoading(true);

    userService
      .authenticate(userPayload, isLogin)
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            addNotification(
              data?.error?.message || "Unsuccessful Authentication!"
            );
          });
        }
      })
      .then((data) => {
        addNotification(
          isLogin
            ? "You logged in successfully"
            : "You created profile successfully",
          types.success
        );
        const expirationTime = new Date(
          new Date().getTime() + Number(data.expiresIn * 1000)
        );
        authContext.login(
          data.idToken,
          expirationTime.toISOString(),
          data.localId
        );
        navigate("/");
      })
      .catch((err) => {
        addNotification(errorMessages[err.message] || err.message);
      });
  };

  return (
    <>
      <Container className="mt-5 login-form-container text-center">
        <Row className="justify-content-md-center">
          <Col lg={4} md={6} sm={12} className="">
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <Formik
              initialValues={{ password: "", email: "" }}
              validationSchema={validationSchema}
            >
              {/* Callback function containing Formik state and helpers that handle common form actions */}
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form
                  className="d-grid gap-2 login-form"
                  onSubmit={submitHandler}
                >
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password ? "error" : null
                      }
                    />
                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>
                  {!isLoading && (
                    <Button
                      variant="warning"
                      size="lg"
                      type="submit"
                      disabled={errors.password || errors.email}
                    >
                      {isLogin ? "Login" : "Create Account"}
                    </Button>
                  )}
                  {isLoading && (
                    <Button variant="warning" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  )}
                  <Button
                    variant="warning"
                    size="lg"
                    type="submit"
                    onClick={switchAuthModeHandler}
                  >
                    {isLogin
                      ? "Create new account"
                      : "Login with existing account"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
