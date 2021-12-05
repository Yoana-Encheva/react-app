import GlobalForm from "../components/ui/GlobalForm";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as classesService from "../services/classes";

function NewClassPage() {
  const navigate = useNavigate();

  function addClassHandler(classData) {
    classesService.create(classData).then(() => {
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
