import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent(props) {
  return (
    <Card bg={"primary"} key={"primary"} text={"white"} className="mb-2">
      <Card.Img
        className="mb-2"
        variant="top"
        src={props.image}
        alt="Card image"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {props.showDetails && (
          <Link to={`/${props.id}/details`}>
            <Button variant="outline-dark">Details</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
