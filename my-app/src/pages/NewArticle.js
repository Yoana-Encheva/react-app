import ArticleForm from "../components/articles/ArticleForm";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as articlesService from "../services/articles";

function NewArticlePage() {
  const navigate = useNavigate();

  function addArticleHandler(articleData) {
    articlesService.create(articleData).then(() => {
      navigate("/blog");
    });
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>Add New Article</h1>
            <ArticleForm
              onSubmit={addArticleHandler}
              buttonLabel="Create Article"
            />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default NewArticlePage;
