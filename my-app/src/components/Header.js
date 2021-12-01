import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./Header.module.css";
import logo from "../assets/img/yo-fit-logo.png";

const Header = () => {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  const logoutHandler = () => {
    authContext.logout();
  };

  return (
    <Navbar
      collapseOnSelect
      className={classes["header-container"]}
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className={classes["image-logo"]} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <Button>
                <span>HOME</span>
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <Button>
                <span>ABOUT</span>
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/classes">
              <Button>
                <span>CLASSES</span>
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/coaches">
              <Button>
                <span>COACHES</span>
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts">
              <Button>
                <span>CONTACTS</span>
              </Button>
            </Nav.Link>
          </Nav>
          <Nav className={classes["right-nav-links"]}>
            <Nav.Link as={Link} to="/blog">
              <Button>
                <span>BLOG</span>
              </Button>
            </Nav.Link>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/login">
                <i className="fas fa-user"></i>
                <Button>
                  <span>LOGIN</span>
                </Button>
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/profile">
                <Button>PROFILE</Button>
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/logout" onClick={logoutHandler}>
                <Button>LOGOUT</Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
