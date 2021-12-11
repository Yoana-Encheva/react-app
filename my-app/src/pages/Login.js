import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import * as userService from "../services/user";

import "./Login.css";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const errorMessages = {
  EMAIL_EXISTS: "This email already exists.",
  INVALID_EMAIL: "This email is not valid.",
  EMAIL_NOT_FOUND: "This email does not persist in the data base.",
  INVALID_PASSWORD: "This password is not valid.",
};

const Login = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setError("");
    setShow(false);
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "*Passwords must have at least 6 characters")
      .max(15, "*Passwords can't be longer than 15 characters")
      .required("*Password is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required")
      .test((value) => EmailValidator.validate(value)),
  });

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
            let errorMessage = "Unsuccessful Authentication!";
            if (data?.error?.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
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
        setError(err.message);
        setShow(true);
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
                    <Button variant="warning" size="lg" type="submit">
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

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                {/* <Modal.Title>Modal heading</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>{errorMessages[error] || error}</Modal.Body>
              <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
