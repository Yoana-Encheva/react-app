import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row, Spinner } from "react-bootstrap";

import * as classesService from "../../services/classes";
import GlobalForm from "../ui/GlobalForm";

const ClassEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState({});

  useEffect(() => {
    classesService.getById(id).then((data) => {
      setIsLoading(false);
      setSelectedClass(data);
    });
  }, [id]);

  function editClassHandler(classData) {
    classesService.edit(classData, id).then(() => {
      navigate("/classes");
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
            <h1>Edit Class</h1>
            <GlobalForm
              onSubmit={editClassHandler}
              title={selectedClass?.title}
              image={selectedClass?.image}
              description={selectedClass?.description}
              buttonLabel="Edit Class"
            />
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default ClassEdit;
