import GlobalForm from "../components/ui/GlobalForm";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as classesService from "../services/classes";
import { useNotificationContext, types } from "../store/notification-context";

function NewClassPage() {
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();

  function addClassHandler(classData) {
    classesService.create(classData).then(() => {
      addNotification("New class added successfully", types.success);
      navigate("/classes");
    });
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>Add New Class</h1>
            <GlobalForm onSubmit={addClassHandler} buttonLabel="Create Class" />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default NewClassPage;
