// import { useState, useEffect } from "react";
// import * as classesService from "../../services/classes";
// import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

const ClassEdit = () => {
  //   const { id } = useParams();
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [selectedClass, setSelectedClass] = useState({});

  //   useEffect(() => {
  //     classesService.getById(id).then((data) => {
  //       setIsLoading(false);
  //       setSelectedClass(data);
  //     });
  //   }, [id]);

  //   if (isLoading) {
  //     return (
  //       <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //     );
  //   }

  return (
    <Container className="mt-5 text-center">
      <h1>edit</h1>
    </Container>
  );
};
export default ClassEdit;
