import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as articlesService from "../../services/articles";
import AuthContext from "../../store/auth-context";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState({});
  const authContext = useContext(AuthContext);
  const isOwner = authContext.userId === selectedArticle.createdBy;
  const isAdmin = authContext.role === "admin";

  useEffect(() => {
    articlesService.getById(id).then((data) => {
      setIsLoading(false);
      setSelectedArticle(data);
    });
  }, [id]);

  const deleteHandler = (e) => {
    e.preventDefault();

    articlesService.deleteArticle(id).then(() => {
      navigate("/blog");
    });
  };

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Container className="mt-5 text-center">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>{selectedArticle.title}</Card.Header>
              <Card.Img variant="top" src={selectedArticle.image} />
              <Card.Body>
                <Card.Text>{selectedArticle.description}</Card.Text>
                {(isOwner || isAdmin) && (
                  <div>
                    <Link to={`/articles/${id}/edit`}>
                      <Button variant="warning">Edit</Button>
                    </Link>
                    <Link to={`/articles/${id}/delete`}>
                      <Button variant="warning" onClick={deleteHandler}>
                        Delete
                      </Button>
                    </Link>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ArticleDetails;
