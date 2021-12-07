import {
  Container,
  Col,
  Ratio,
  Row,
  Card,
  Image,
  Carousel,
} from "react-bootstrap";
import classes from "./Home.module.css";
import aboutUsImage from "../assets/img/about-us-4.jpg";
import sample from "../assets/video/sample-1.mp4";

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
              <h2 className={"primary"}> Meet our classes and coaches</h2>
            </Col>
            <hr />
            <Col md="10">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium blanditiis officiis quisquam recusandae
                reprehenderit. Accusantium deleniti eos est facere reprehenderit
                sapiente sint voluptatem. Asperiores autem beatae laboriosam
                officia quae, temporibus.
              </span>
            </Col>
          </Row>

          <Row className="justify-content-md-center mt-2 g-4">
            <Col md="4">
              <Card
                bg={"primary"}
                key={"primary"}
                text={"white"}
                className="mb-2"
              >
                <Card.Img
                  className="mb-5"
                  variant="top"
                  src="https://images.everydayhealth.com/images/tips-to-help-you-stick-with-exercise-when-managing-type-2-diabetes-alt-722x406.jpg?w=720"
                  alt="Card image"
                />

                <Card.Body>
                  <Card.Title> CLASSES</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md="4">
              <Card
                bg={"primary"}
                key={"primary"}
                text={"white"}
                className="mb-2"
              >
                <Card.Img
                  className="mb-5"
                  variant="top"
                  src="https://www.wellnessliving.com/blog/wp-content/uploads/2019/02/Fitness-Instructor-Certifications-1024x577.jpg"
                  alt="Card image"
                />

                <Card.Body>
                  <Card.Title> COACHES</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={classes["about-us-section"]}>
        <Container className={classes["class-section"] + "mt-4"}>
          <Row className="justify-content-md-center g-4">
            <Col bg="primary" md="12">
              <h2 className={"primary"}> About us</h2>
            </Col>
            <hr />
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
                  <Card.Title> CLASSES</Card.Title>
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

      <div className="customer-reviews mt-5 mb-5">
        <Container>
          <h3 className="mb-4"> Customer reviews</h3>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card
                    bg={"blue"}
                    key={"primary"}
                    text={"white"}
                    className="mb-2"
                    border="light"
                  >
                    <Card.Body>
                      <Card.Title className="justify-content-center">
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/03/26/20/35/young-man-1281282_960_720.jpg"
                          roundedCircle
                          fluid
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p> John Doe </p>
                      </Card.Title>
                      <Card.Text>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusantium blanditiis officiis quisquam
                          recusandae reprehenderit. Accusantium deleniti eos est
                          facere reprehenderit sapiente sint voluptatem.
                          Asperiores autem beatae laboriosam officia quae,
                          temporibus.
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};
export default Home;
