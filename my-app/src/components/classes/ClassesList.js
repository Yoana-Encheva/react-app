import ClassItem from "./ClassItem";
import { Row, Col } from "react-bootstrap";
import classes from "./ClassesList.module.css";

function ClassesList(props) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {props.classes.map((classItem) => (
        <Col className={classes["flex-card"]} key={classItem.id}>
          <ClassItem
            key={classItem.id}
            id={classItem.id}
            image={classItem.image}
            title={classItem.title}
            description={classItem.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ClassesList;
