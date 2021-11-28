import { Container, Row } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <h2>We are sorry, this page is not found =(</h2>
      </Row>
    </Container>
  );
}

export default NotFound;
