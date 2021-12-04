import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent(props) {
  const defaultUrl =
    "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg";
  return (
    <Card bg={"primary"} key={"primary"} text={"white"} className="mb-2">
      <Card.Img
        className="mb-2"
        variant="top"
        src={props.image || defaultUrl}
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
