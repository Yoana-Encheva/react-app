import Article from "./Article";
import { Row, Col } from "react-bootstrap";

function ArticlesList(props) {
  return (
    <Row xs={1} className="g-4">
      {props.articles.map((article) => (
        <Col key={article.id}>
          <Article
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ArticlesList;
