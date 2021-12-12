import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import * as articlesService from "../../services/articles";

import ArticleForm from "./ArticleForm";
import { Container, Col, Row, Spinner } from "react-bootstrap";

const ArticleEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const authContext = useContext(AuthContext);
  const isOwner = authContext.userId === article.createdBy;
  const isAdmin = authContext.role === "admin";
  const isAuthorised = isAdmin || isOwner;

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
          {isAuthorised && (
            <section>
              <h1>Edit article</h1>
              <ArticleForm
                onSubmit={editArticleHandler}
                title={article?.title}
                image={article?.image}
                category={article?.category}
                created={article?.created}
                description={article?.description}
                buttonLabel="Edit article"
              />
            </section>
          )}
          {!isAuthorised && (
            <section>
              <h1>Not Authorised.</h1>
            </section>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default ArticleEdit;
