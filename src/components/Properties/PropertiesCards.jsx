import React from "react";
import PropCardsStyle from "../../scss/propertiesCards.module.scss";
import { Card, ListGroup, Col } from "react-bootstrap";

function PropertiesCards({
  rooms,
  area,
  type,
  price,
  location,
  extImage,
  intImage,
}) {
  return (
    <Col style={{ width: "20rem" }} className={PropCardsStyle.contColumn}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={extImage} />
        <Card.Body>
          <Card.Title>
            {type} at {location}
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ab!
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span>Area:</span> {area} m2
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Rooms:</span> {rooms}
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Price:</span> {price} €
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PropertiesCards;
