import { useContext, useState, useEffect } from "react";
import * as articlesService from "../services/articles";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Row, Spinner } from "react-bootstrap";
import AuthContext from "../store/auth-context";
import ArticlesList from "../components/articles/ArticlesList";
import classes from "./Home.module.css";

function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  useEffect(() => {
    articlesService.getAll().then((data) => {
      const articles = [];

      for (const key in data) {
        const article = {
          id: key,
          ...data[key],
        };

        articles.push(article);
      }

      setIsLoading(false);
      setArticles(articles);
    });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className={classes["class-section"]}>
      <Container className={classes["class-section"] + "mt-4"}>
        {isLoggedIn && (
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/new-article">
                <Button variant="outline-dark">Add New Article</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )}
        <Row className="justify-content-md-center mt-2 g-4">
          {articles.length ? (
            <section>
              <h1>Our articles</h1>
              <ArticlesList articles={articles} />
            </section>
          ) : (
            <h2>There are no articles at the moment</h2>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
