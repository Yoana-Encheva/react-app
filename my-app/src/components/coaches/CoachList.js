import Coach from "./Coach";
import { Row, Col } from "react-bootstrap";
import classes from "./CoachList.module.css";

function CoachList(props) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-5">
      {props.coaches.map((coach) => (
        <Col className={`mt-5 ${classes["flex-card"]}`} key={coach.id}>
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
