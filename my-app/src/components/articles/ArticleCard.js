import { Link } from "react-router-dom";
import { Badge, Button, Card } from "react-bootstrap";
import classes from "./ArticleCard.module.css";
import { categories, formattedDate } from "../../helpers/helpers";

function ArticleCard(props) {
  const defaultUrl =
    "https://cdn.pixabay.com/photo/2015/05/26/09/23/board-784363__340.jpg";

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
            <Card.Title>{props.title} </Card.Title>
            <Card.Subtitle>
              {formattedDate(props.createdOn)}{" "}
              <Badge pill bg={categories[props.category]?.color || "warning"}>
                {categories[props.category]?.label || "Other"}
              </Badge>
            </Card.Subtitle>
            <Card.Text className={classes["card-text-content"]}>
              {props.description.length < 320
                ? `${props.description}`
                : `${props.description.substring(0, 320)}...`}
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
