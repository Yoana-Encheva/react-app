import classes from "./Home.module.css";
import { Card, Col, Container, Image, Row, Carousel } from "react-bootstrap";
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
                  <Card.Title> Yo Fit</Card.Title>
                  <Card.Text>
                    Yo Fit is an innovative, community-focused charity committed
                    to making a positive impact on the health and wellbeing of
                    our community.
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

        <div className="customer-reviews mt-5 mb-5">
          <Container>
            <h3 className="mb-4">Customer reviews</h3>
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
                            Simply, with their help I achieved my goal of
                            putting on weight, one which I have struggled with
                            for years. With their help I have gained 13kg+ and
                            my strength has more than doubled. They really
                            helped me by giving me the tools to grow. regimes.
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
                            src="https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209__340.jpg"
                            roundedCircle
                            fluid
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                            }}
                          />
                          <p> Anna Petrova </p>
                        </Card.Title>
                        <Card.Text>
                          <span>
                            I would recommend Yo Fit in a heartbeat having also
                            met and trained with a couple of the other trainers
                            in this company. I aim to continue to train and
                            maintain a good level of fitness with their help for
                            a long time to come.
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
                            src="https://cdn.pixabay.com/photo/2017/08/06/05/42/people-2589176_960_720.jpg"
                            roundedCircle
                            fluid
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                            }}
                          />
                          <p> Peter Pavlov</p>
                        </Card.Title>
                        <Card.Text>
                          <span>
                            Yo Fit Personal Training is really great. I was
                            skinny but too unmotivated and shy to go to the gym.
                            I had Russell Laurie as my personal trainer and now
                            I noticed a positive change in my appearance. I am
                            happy and now more confident with myself.
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
                            src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg"
                            roundedCircle
                            fluid
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                            }}
                          />
                          <p> Hristo Ivanov </p>
                        </Card.Title>
                        <Card.Text>
                          <span>
                            I’ve been training with Dave for almost 3 years now,
                            and believe he is one of the most experienced &
                            committed trainers around. I started training once a
                            week, as part of a group session, really enjoyed the
                            variety & challenge
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
                            src="https://cdn.pixabay.com/photo/2020/06/20/16/13/male-5321547_960_720.jpg"
                            roundedCircle
                            fluid
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                            }}
                          />
                          <p> Kiril Mihalev </p>
                        </Card.Title>
                        <Card.Text>
                          <span>
                            What I like about Dave from Yo Fit is that he knows
                            how to motivate me, he makes each of my training
                            sessions challenging but rewarding. I would have no
                            hesitation in recommending him as your personal
                            trainer.
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
                            src="https://cdn.pixabay.com/photo/2016/09/21/21/46/sport-1685786_960_720.jpg"
                            roundedCircle
                            fluid
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                            }}
                          />
                          <p> Stoyan Stoyanov </p>
                        </Card.Title>
                        <Card.Text>
                          <span>
                            Signing up with Yo Fit was one of the best things I
                            have ever done! Dave my trainer has helped me
                            achieve my goals so far and I love our sessions. He
                            makes it fun and enjoyable to train and he is very
                            motivating and encouraging!
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
    </div>
  );
};
export default About;
