import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import { useContext, useState, useEffect } from "react";
import * as articlesService from "../../services/articles";
import AuthContext from "../../store/auth-context";
import {
  Button,
  Container,
  Nav,
  Row,
  Spinner,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ArticlesList from "../../components/articles/ArticlesList";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersArticles, setUsersArticles] = useState([]);
  const authContext = useContext(AuthContext);
  const userId = authContext.userId;
  const isLoggedIn = authContext.isLoggedIn;
  const [key, setKey] = useState("articles");

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
      setUsersArticles(
        articles.filter((article) => article.createdBy === userId)
      );
    });
  }, [userId]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className={classes["class-section"] + "mt-4"}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="articles" title="My Articles">
          <section>
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
              {usersArticles.length ? (
                <section>
                  <h1>My articles</h1>
                  <ArticlesList articles={usersArticles} />
                </section>
              ) : (
                <h2>There are no articles at the moment</h2>
              )}
            </Row>
          </section>
        </Tab>
        <Tab eventKey="profile" title="Security">
          <ProfileForm />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default UserProfile;
