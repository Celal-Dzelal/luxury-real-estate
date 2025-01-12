import React, { useState } from "react";
import PropCardsStyle from "../../scss/propertiesCards.module.scss";
import { Card, ListGroup, Col, Alert } from "react-bootstrap";
// import CardModal from "../Modals/CardModal";
import { Button, Modal } from "react-bootstrap";

function PropertiesCards({
  rooms,
  area,
  type,
  price,
  location,
  extImage,
  intImage,
  salesAgent,
  description,
  listing,
}) {
  const [myModal, setMyModal] = useState(false);

  const handleModal = () => {
    setMyModal(true);
  };

  const closeModal = () => {
    setMyModal(false);
  };

  const appointment = () => {
    alert("Appointments are not available for this property");
  };
  return (
    <>
      <Col style={{ width: "20rem" }} className={PropCardsStyle.contColumn}>
        <Card
          style={{ width: "18rem" }}
          className={PropCardsStyle.cards}
          onClick={handleModal}
        >
          <Card.Img
            variant="top"
            src={extImage}
            className={PropCardsStyle.img}
          />
          <Card.Body className={PropCardsStyle.body}>
            <Card.Title className={PropCardsStyle.title}>
              {type} at {location}
            </Card.Title>
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
        </Card>
      </Col>
      {myModal && (
        <Modal show={true} onHide={closeModal} className={PropCardsStyle.modal}>
          <Modal.Header closeButton className={PropCardsStyle.header}>
            <Modal.Title className={PropCardsStyle.title}>
              {type} at {location}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={PropCardsStyle.body}>
            <div className={PropCardsStyle.imgDiv}>
              <img className={PropCardsStyle.image} src={intImage} alt="" />
            </div>

            <p className={PropCardsStyle.description}>{description}</p>
            <p className={PropCardsStyle.text}>Sales Agent: {salesAgent}</p>
            <p className={PropCardsStyle.text}>Listing Date: {listing}</p>
          </Modal.Body>
          <Modal.Footer className={PropCardsStyle.footer}>
            <Button
              className={PropCardsStyle.closeButton}
              variant="secondary"
              onClick={closeModal}
            >
              Close
            </Button>
            <Button
              className={PropCardsStyle.apply}
              variant="primary"
              onClick={appointment}
            >
              Appointment
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default PropertiesCards;
