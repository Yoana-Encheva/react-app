import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Header = () => {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  const logoutHandler = () => {
    authContext.logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/classes">
              Classes
            </Nav.Link>
            <Nav.Link as={Link} to="/coaches">
              Coaches
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts">
              Contacts
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/logout" onClick={logoutHandler}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
