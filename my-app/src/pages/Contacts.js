import * as requestsService from "../services/requests";
import { useNotificationContext, types } from "../store/notification-context";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import classes from "./Contacts.module.css";

const Contacts = () => {
  const { addNotification } = useNotificationContext();

  function submitHandler(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    const enteredName = formData.get("name");
    const enteredEmail = formData.get("email");
    const enteredRequest = formData.get("request");

    const newFormData = {
      name: enteredName,
      email: enteredEmail,
      request: enteredRequest,
    };

    requestsService.create(newFormData).then(() => {
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.request.value = "";

      addNotification("Request sent successfully", types.info);
    });
  }
  return (
    <div>
      <Card>
        <Card.Img
          style={{ maxHeight: "500px", objectFit: "cover", opacity: "0.5" }}
          variant="top"
          src="https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_960_720.jpg"
        />
        <Card.Body>
          <h1 className="mt-3 mb-3">Contact us</h1>
        </Card.Body>
      </Card>

      <div className={classes["form-section"]}>
        <Container>
          <Row
            style={{ height: "600px" }}
            className={"justify-content-center align-content-center"}
          >
            <Col xs={12} lg={6}>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    <h2>Name</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    defaultValue=""
                    required
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <h2>Email Address</h2>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    defaultValue=""
                    required
                    placeholder="name@example.com"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <h2>How can we help?</h2>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="request"
                    name="request"
                    defaultValue=""
                    required
                  />
                </Form.Group>

                <Button size="lg" variant="primary" type="submit">
                  SUBMIT
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <h1 className="mt-3 mb-3">Our locations</h1>
      <Container className="mb-4">
        <Row className={"justify-content-around"}>
          <Col xs={12} lg={4} className="mt-4">
            <Card
              bg={"light"}
              key={"primary"}
              text={"dark"}
              className="mb-2"
              border="light"
            >
              <Card.Body>
                <Card.Title className="justify-content-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="location"
                  />
                </Card.Title>
                <Card.Text>LOCATION:</Card.Text>
                <Card.Text>
                  Harrogate, UK 56 Burley Bank Road Killinghall HG3 2RZ Tel:
                  01865 58 9595
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4} className="mt-4">
            <Card
              bg={"light"}
              key={"primary"}
              text={"dark"}
              className="mb-2"
              border="light"
            >
              <Card.Body>
                <Card.Title className="justify-content-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="location"
                  />
                </Card.Title>
                <Card.Text>LOCATION:</Card.Text>
                <Card.Text>
                  Harrogate, UK 56 Burley Bank Road Killinghall HG3 2RZ Tel:
                  01865 58 9595
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contacts;
