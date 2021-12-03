import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((oldState) => !oldState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //to add validation here!

    setIsLoading(true);

    let url = isLogin
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCip7fnJIPC5Ukeb7P7fGPPGEZC2rQlIBU"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCip7fnJIPC5Ukeb7P7fGPPGEZC2rQlIBU";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
        alert(err.message);
      });
  };

  return (
    <>
      <Container className="mt-5 login-form-container text-center">
        <Row className="justify-content-md-center">
          <Col lg={4} md={6} sm={12} className="">
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <Form className="d-grid gap-2 login-form" onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  ref={emailInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  ref={passwordInputRef}
                />
              </Form.Group>
              <Form.Text className="text-muted mb-3">
                New to this site? Sign Up
              </Form.Text>
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
                {isLogin ? "Create new account" : "Login with existing account"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
