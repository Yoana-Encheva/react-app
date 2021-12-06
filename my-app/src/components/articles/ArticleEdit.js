import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row, Spinner } from "react-bootstrap";

import * as articlesService from "../../services/articles";
import ArticleForm from "./ArticleForm";

const ArticleEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});

  useEffect(() => {
    articlesService.getById(id).then((data) => {
      setIsLoading(false);
      setArticle(data);
    });
  }, [id]);

  function editArticleHandler(articleData) {
    articlesService.edit(articleData, id).then(() => {
      navigate("/blog");
    });
  }

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col lg={4} md={6} sm={12} className="">
          <section>
            <h1>Edit article</h1>
            <ArticleForm
              onSubmit={editArticleHandler}
              title={article?.title}
              image={article?.image}
              description={article?.description}
              buttonLabel="Edit article"
            />
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default ArticleEdit;
