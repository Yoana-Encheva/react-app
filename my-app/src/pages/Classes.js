import { useContext, useState, useEffect } from "react";
import ClassesList from "../components/classes/ClassesList";
import { Button, Container, Nav, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as classesService from "../services/classes";
import AuthContext from "../store/auth-context";
import classes from "./Home.module.css";

function Classes() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedClasses, setLoadedClasses] = useState([]);
  const authContext = useContext(AuthContext);
  const isAdmin = authContext.role === "admin";

  useEffect(() => {
    classesService.getAll().then((data) => {
      const classes = [];

      for (const key in data) {
        const classItem = {
          id: key,
          ...data[key],
        };

        classes.push(classItem);
      }

      setIsLoading(false);
      setLoadedClasses(classes);
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
      <Container className={classes["class-section"] + "mt-4"}>
        {isAdmin && (
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/new-class">
                <Button variant="outline-dark">Add New Class</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )}
        <Row className="justify-content-md-center mt-2 g-4 align-content-center">
          {loadedClasses.length ? (
            <section>
              <h1 className="mt-5 mb-5">All Classes</h1>
              <ClassesList classes={loadedClasses} />
            </section>
          ) : (
            <h2>There are no classes at the moment</h2>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Classes;
