import { useContext, useState, useEffect } from "react";
import * as classesService from "../../services/classes";
import AuthContext from "../../store/auth-context";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState({});
  const authContext = useContext(AuthContext);
  const isAdmin = authContext.role === "admin";

  useEffect(() => {
    classesService.getById(id).then((data) => {
      setIsLoading(false);
      setSelectedClass(data);
    });
  }, [id]);

  const deleteHandler = (e) => {
    e.preventDefault();

    classesService.deleteClass(id).then(() => {
      navigate("/classes");
    });
  };

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Container className="mt-5 text-center">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>{selectedClass.title}</Card.Header>
              <Card.Img variant="top" src={selectedClass.image} />
              <Card.Body>
                <Card.Text>{selectedClass.description}</Card.Text>
                {isAdmin && (
                  <div>
                    <Link to={`/${id}/edit`}>
                      <Button variant="warning">Edit</Button>
                    </Link>
                    <Link to={`/${id}/delete`}>
                      <Button variant="warning" onClick={deleteHandler}>
                        Delete
                      </Button>
                    </Link>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ClassDetails;
