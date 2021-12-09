import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import classes from "./ArticleCard.module.css";

function ArticleCard(props) {
  const defaultUrl =
    "https://cdn.pixabay.com/photo/2015/05/26/09/23/board-784363__340.jpg";

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", dateOptions);
  };

  return (
    <>
      <div className={classes["card-container"]}>
        <div className={classes["image-wrapper"]}>
          <img
            className={classes["card-img"]}
            src={props.image || defaultUrl}
            alt="article"
          />
        </div>
        <Card
          bg={"primary"}
          key={"primary"}
          text={"white"}
          className={classes["card"]}
        >
          <Card.Body className={classes["card-body"]}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>{formattedDate(props.createdOn)}</Card.Subtitle>
            <Card.Text className={classes["card-text-content"]}>
              {props.description}
            </Card.Text>
            <Link to={`/articles/${props.id}/details`}>
              <Button variant="outline-dark">Read More</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ArticleCard;
