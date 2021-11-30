import { useState, useEffect } from "react";
import ClassesList from "./classes/ClassesList";
import { Col, Container, Nav, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as classesService from "../services/classes";

function Classes() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedClasses, setLoadedClasses] = useState([]);

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
    <Container className="mt-5 text-center">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/new-class">
            Add New Class
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="link-1">
            Favorite Classes
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>All Classes</h1>
            <ClassesList classes={loadedClasses} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Classes;
