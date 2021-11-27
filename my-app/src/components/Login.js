import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Container className="mt-5 login-form-container text-center">
        <Row className="justify-content-md-center">
          <Col lg={4} md={6} sm={12} className="">
            <Form className="d-grid gap-2 login-form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Text className="text-muted mb-3">
                New to this site? Sign Up
              </Form.Text>
              <Button variant="warning" size="lg" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
