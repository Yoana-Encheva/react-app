import { useContext, useState, useEffect } from "react";
import * as coachesService from "../services/coaches";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Row, Spinner } from "react-bootstrap";
import AuthContext from "../store/auth-context";
import CoachList from "../components/coaches/CoachList";
import classes from "./Home.module.css";

function Coaches() {
  const [isLoading, setIsLoading] = useState(true);
  const [coaches, setCoaches] = useState([]);
  const authContext = useContext(AuthContext);
  const isAdmin = authContext.role === "admin";

  useEffect(() => {
    coachesService.getAll().then((data) => {
      const coaches = [];

      for (const key in data) {
        const coach = {
          id: key,
          ...data[key],
        };

        coaches.push(coach);
      }

      setIsLoading(false);
      setCoaches(coaches);
    });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className={classes["class-section"]}>
      <Container className={classes["class-section"] + "mt-5 mb-5"}>
        {isAdmin && (
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/new-coach">
                <Button variant="outline-dark">Add New Coach</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )}
        <Row className="justify-content-md-center">
          {coaches.length ? (
            <section>
              <h1 className="mt-5 mb-5">Our Coaches</h1>
              <CoachList coaches={coaches} />
            </section>
          ) : (
            <h1>There are no coaches at the moment</h1>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Coaches;
