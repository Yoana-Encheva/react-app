import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row, Spinner } from "react-bootstrap";

import * as coachesService from "../../services/coaches";
import {
  useNotificationContext,
  types,
} from "../../store/notification-context";
import GlobalForm from "../ui/GlobalForm";

const CoachEdit = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coach, setCoach] = useState({});

  useEffect(() => {
    coachesService.getById(id).then((data) => {
      setIsLoading(false);
      setCoach(data);
    });
  }, [id]);

  function editCoachHandler(coachData) {
    coachesService.edit(coachData, id).then(() => {
      addNotification("Coach info edited successfully", types.info);
      navigate("/coaches");
    });
  }

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>Edit Coach</h1>
            <GlobalForm
              onSubmit={editCoachHandler}
              title={coach?.title}
              image={coach?.image}
              description={coach?.description}
              buttonLabel="Edit Coach"
            />
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default CoachEdit;
