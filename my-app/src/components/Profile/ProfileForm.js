import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import * as userService from "../../services/user";
import { validationSchema, errorMessages } from "../../helpers/helpers";

import { Formik } from "formik";

import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setError("");
    setShow(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let { email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    const userPayload = {
      idToken: authContext.token,
      email: email,
      password: password,
      returnSecureToken: true,
    };

    setIsLoading(true);

    userService
      .updateUserInfo(userPayload)
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(
              data?.error?.message
                ? data.error.message
                : "Unsuccessful Authentication!"
            );
          });
        }
      })
      .then((data) => {
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
          <h2>Change your email or password</h2>

          <Col lg={4} md={6} sm={12} className="mt-3">
            <Formik
              initialValues={{ password: "", email: "" }}
              validationSchema={validationSchema}
            >
              {/* Callback function containing Formik state and helpers that handle common form actions */}
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form className="d-grid gap-2" onSubmit={submitHandler}>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Control
                      required
                      type="text"
                      placeholder="New email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                      <div className={classes["error-message"]}>
                        {errors.email}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      required
                      type="password"
                      placeholder="New Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password
                          ? classes["error"]
                          : null
                      }
                    />
                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>

                  {!isLoading && (
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={errors.password || errors.email}
                    >
                      Confirm
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

export default ProfileForm;
