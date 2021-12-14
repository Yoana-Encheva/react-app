import { useNavigate } from "react-router-dom";
import * as coachesService from "../services/coaches";
import { useNotificationContext, types } from "../store/notification-context";
import GlobalForm from "../components/ui/GlobalForm";
import { Col, Container, Row } from "react-bootstrap";

function NewCoachPage() {
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();

  function addCoachHandler(coachData) {
    coachesService.create(coachData).then(() => {
      addNotification("New coach added successfully", types.success);
      navigate("/coaches");
    });
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>Add New Coach</h1>
            <GlobalForm onSubmit={addCoachHandler} buttonLabel="Create Coach" />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default NewCoachPage;
