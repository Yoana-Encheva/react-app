import ClassItem from "./ClassItem";
import { Col } from "react-bootstrap";

function ClassesList(props) {
  return (
    <Col md="4">
      {props.classes.map((classItem) => (
        <ClassItem
          key={classItem.id}
          id={classItem.id}
          image={classItem.image}
          title={classItem.title}
          description={classItem.description}
        />
      ))}
    </Col>
  );
}

export default ClassesList;
