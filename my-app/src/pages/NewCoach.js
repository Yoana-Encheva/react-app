import GlobalForm from "../components/ui/GlobalForm";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as coachesService from "../services/coaches";

function NewCoachPage() {
  const navigate = useNavigate();

  function addCoachHandler(coachData) {
    coachesService.create(coachData).then(() => {
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
