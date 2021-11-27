import NewClassForm from "../components/classes/NewClassForm";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NewClassPage() {
  const navigate = useNavigate();

  function addClassHandler(classData) {
    fetch(
      "https://react-fitness-app-ae9d8-default-rtdb.firebaseio.com/classes.json",
      {
        method: "POST",
        body: JSON.stringify(classData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/classes");
    });
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>Add New Class</h1>
            <NewClassForm onAddClass={addClassHandler} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default NewClassPage;
