import classes from "./Home.module.css";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import aboutUsImage from "../assets/img/about-us-4.jpg";

const About = () => {
  return (
    <div>
      <h1 className="mt-5 mb-5">About</h1>
      <hr />

      <div className={classes["about-us-section"]}>
        <Container className={classes["class-section"] + "mt-4"}>
          <Row className="justify-content-md-center g-4">
            <Col bg="primary" md="12"></Col>
            <Col md="10"></Col>
          </Row>

          <Row className="justify-content-md-center mt-2 g-4">
            <Col md="5">
              <Image fluid src={aboutUsImage}></Image>
            </Col>

            <Col md="5">
              <Card
                bg={"primary"}
                key={"primary"}
                text={"white"}
                className="mb-2"
                border="light"
              >
                <Card.Body>
                  <Card.Title> Our Mission</Card.Title>
                  <Card.Text>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusantium blanditiis officiis quisquam recusandae
                      reprehenderit. Accusantium deleniti eos est facere
                      reprehenderit sapiente sint voluptatem. Asperiores autem
                      beatae laboriosam officia quae, temporibus.
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default About;
