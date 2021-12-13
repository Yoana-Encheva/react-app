import { Carousel, Row } from "react-bootstrap";
import CarouselItem from "./Carouseltem";
import * as reviewsService from "../../services/reviews";
import { useState, useEffect } from "react";

function ReviewsCarousel(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsService.getAll().then((data) => {
      const reviews = [];

      for (const key in data) {
        const review = {
          id: key,
          ...data[key],
        };

        reviews.push(review);
      }

      setReviews(reviews);
    });
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <Row>
          {reviews.slice(0, 3).map((review) => (
            <CarouselItem
              key={review.id}
              id={review.id}
              imageUrl={review.imageUrl}
              name={review.name}
              comment={review.comment}
            />
          ))}
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row>
          {reviews.slice(3, 6).map((review) => (
            <CarouselItem
              key={review.id}
              id={review.id}
              imageUrl={review.imageUrl}
              name={review.name}
              comment={review.comment}
            />
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default ReviewsCarousel;
