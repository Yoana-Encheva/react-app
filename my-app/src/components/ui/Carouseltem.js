import { Card, Col, Image } from "react-bootstrap";

function CarouselItem(props) {
  return (
    <Col>
      <Card
        bg={"blue"}
        key={"primary"}
        text={"white"}
        className="mb-2"
        border="light"
      >
        <Card.Body>
          <Card.Title className="justify-content-center">
            <Image
              src={props.imageUrl}
              roundedCircle
              fluid
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
              }}
            />
            <p>{props.name}</p>
          </Card.Title>
          <Card.Text>{props.comment}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CarouselItem;
