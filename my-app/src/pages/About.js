import { Container } from "react-bootstrap";
import ReviewsCarousel from "../components/ui/Carousel";
import AboutSection from "../components/common/AboutSection";

const About = () => {
  return (
    <div>
      <h1 className="mt-5 mb-5">About</h1>
      <hr />

      <AboutSection />
      <div className="customer-reviews mt-5 mb-5">
        <Container>
          <h3 className="mb-4">Customer reviews</h3>
          <ReviewsCarousel />
        </Container>
      </div>
    </div>
  );
};
export default About;
