import { Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logo from "../assets/img/yo-fit-logo.png";

const Footer = () => {
  return (
    <footer className={classes.distributed}>
      <Container>
        <Row className="justify-content-md-between">
          <Col xs={12} lg={6}>
            <img className={classes["image-logo"]} src={logo} alt="logo" />

            <Nav className={classes.links}>
              <Nav.Link className={classes.links} as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className={classes.links} as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className={classes.links} as={Link} to="/classes">
                Classes
              </Nav.Link>
              <Nav.Link className={classes.links} as={Link} to="/coaches">
                Coaches
              </Nav.Link>
              <Nav.Link className={classes.links} as={Link} to="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} lg={2} className="mt-4">
            <span className="footer-title">CONTACTS:</span>
            <Nav className={classes.links}>
              <Nav.Link
                className={classes["link-contact"]}
                as={Link}
                to="call:"
              >
                <i className="fas fa-phone"></i> +3598 000 000
              </Nav.Link>

              <Nav.Link
                className={classes["link-contact"]}
                as={Link}
                to="call:"
              >
                <i className="fas fa-envelope"></i> email@example.com
              </Nav.Link>

              <Nav.Link
                className={classes["link-contact"]}
                as={Link}
                to="call:"
              >
                <i className="fas fa-map-marked-alt"></i> Varna, Morska Gara
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} lg={3} className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="location"
            />
          </Col>
        </Row>

        <Row>
          <Col className={classes.bottom}>
            <div className={classes.icons}>
              <Link to="#">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>
            <div className={classes["company-name"]}>Yo Fit 2021 ©</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
