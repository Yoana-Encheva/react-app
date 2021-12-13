import classes from "../../pages/Home.module.css";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import aboutUsImage from "../../assets/img/about-us-4.jpg";

const AboutSection = () => {
  return (
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
                <Card.Title> Yo Fit</Card.Title>
                <Card.Text>
                  Yo Fit is an innovative, community-focused charity committed
                  to making a positive impact on the health and wellbeing of our
                  community.
                </Card.Text>
                <Card.Text>
                  Any surplus that is made is reinvested in the facilities and
                  the local community.
                </Card.Text>
                <Card.Text>
                  We have been a charitable trust since 2004 and have been at
                  the forefront of sport and leisure in Yo Fit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
