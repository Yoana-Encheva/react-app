import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import classes from "./CoachCard.module.css";

function CoachCard(props) {
  const defaultUrl =
    "https://cdn.pixabay.com/photo/2015/05/26/09/23/board-784363__340.jpg";

  return (
    <Card
      style={{ flex: "1" }}
      bg={"primary"}
      key={"primary"}
      text={"white"}
      className="mb-2"
    >
      <div className={classes["image-wrapper"]}>
        <img
          className={classes["card-img"]}
          src={props.image || defaultUrl}
          alt="coach"
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to={`/coaches/${props.id}/details`}>
          <Button variant="outline-dark">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CoachCard;
