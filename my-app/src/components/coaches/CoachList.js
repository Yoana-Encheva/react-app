import Coach from "./Coach";
import { Row, Col } from "react-bootstrap";

function CoachList(props) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {props.coaches.map((coach) => (
        <Col key={coach.id}>
          <Coach
            key={coach.id}
            id={coach.id}
            image={coach.image}
            title={coach.title}
            description={coach.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default CoachList;
