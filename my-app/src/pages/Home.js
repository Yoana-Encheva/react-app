import { Container, Col, Ratio, Row, Card } from "react-bootstrap";
import classes from "./Home.module.css";
import sample from "../assets/video/sample-1.mp4";
import { Link } from "react-router-dom";
import ReviewsCarousel from "../components/ui/Carousel";
import AboutSection from "../components/common/AboutSection";

const Home = () => {
  return (
    <div>
      <div style={{ height: "auto" }} className={classes["video-container"]}>
        <div className="d-none d-lg-block">
          <Ratio aspectRatio="16x9">
            <video autoPlay loop muted>
              <source src={sample} type="video/mp4" />
            </video>
          </Ratio>
        </div>

        <div className="d-block d-lg-none">
          <Ratio aspectRatio="1x1">
            <video autoPlay loop muted>
              <source src={sample} type="video/mp4" />
            </video>
          </Ratio>
        </div>
      </div>
      <div className={classes["over-video-text"]}>
        <h1>DARE TO THINK BEYOND YOUR DREAMS</h1>
      </div>

      <div className={classes["class-section"]}>
        <Container className={classes["class-section"] + "mt-4"}>
          <Row className="justify-content-md-center g-4">
            <Col bg="primary" md="12">
              <h2 className={"primary"}>Meet our classes and coaches</h2>
            </Col>
            <hr />
            <Col md="10">
              <span>
                Check our new classes and find out a little bit more for our top
                coaches
              </span>
            </Col>
          </Row>

          <Row className="justify-content-md-center mt-2 g-4">
            <Col md="4">
              <Card
                bg={"primary"}
                key={"primary"}
                text={"secondary"}
                className="mb-2"
                as={Link}
                to="/classes"
              >
                <Card.Img
                  className="mb-3"
                  variant="top"
                  src="https://images.everydayhealth.com/images/tips-to-help-you-stick-with-exercise-when-managing-type-2-diabetes-alt-722x406.jpg?w=720"
                  alt="Card image"
                />

                <Card.Body>
                  <Card.Title>CLASSES</Card.Title>
                  <Card.Text>
                    Looking to start a new class? Check all of our great classes
                    and pick up the best for you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md="4">
              <Card
                bg={"primary"}
                key={"primary"}
                text={"secondary"}
                className="mb-2"
                as={Link}
                to="/coaches"
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  className="mb-3"
                  variant="top"
                  src="https://www.wellnessliving.com/blog/wp-content/uploads/2019/02/Fitness-Instructor-Certifications-1024x577.jpg"
                  alt="Card image"
                />

                <Card.Body>
                  <Card.Title>COACHES</Card.Title>
                  <Card.Text>
                    See our top coaches. Learn more about them and get
                    inspiration for your next goal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <AboutSection />

      <div className="customer-reviews mt-5 mb-5">
        <Container>
          <h3 className="mb-4">Customer reviews</h3>
          <ReviewsCarousel />
        </Container>
      </div>
    </div>
  );
};
export default Home;
