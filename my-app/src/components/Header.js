import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/classes">Classes</Nav.Link>
            <Nav.Link href="/coaches">Coaches</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
