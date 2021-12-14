import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as coachesService from "../../services/coaches";
import {
  useNotificationContext,
  types,
} from "../../store/notification-context";
import AuthContext from "../../store/auth-context";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const CoachDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCoach, setSelectedCoach] = useState({});
  const authContext = useContext(AuthContext);
  const isAdmin = authContext.role === "admin";

  useEffect(() => {
    coachesService.getById(id).then((data) => {
      setIsLoading(false);
      setSelectedCoach(data);
    });
  }, [id]);

  const deleteHandler = (e) => {
    e.preventDefault();

    coachesService.deleteCoach(id).then(() => {
      addNotification("Coach deleted successfully", types.warn);
      navigate("/coaches");
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
              <Card.Header>{selectedCoach.title}</Card.Header>
              <Card.Img variant="top" src={selectedCoach.image} />
              <Card.Body>
                <Card.Text>{selectedCoach.description}</Card.Text>
                {isAdmin && (
                  <div>
                    <Link to={`/coaches/${id}/edit`}>
                      <Button variant="warning">Edit</Button>
                    </Link>
                    <Link to={`/coaches/${id}/delete`}>
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
export default CoachDetails;
