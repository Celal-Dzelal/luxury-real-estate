import React from "react";
import PropContStyle from "../../scss/propertiesContainer.module.scss";
import PropertiesCards from "./PropertiesCards";
import { luxuryHomes } from "../../helpers/data";
import { Container, Row } from "react-bootstrap";

function PropertiesContainer() {
  return (
    <Container className={PropContStyle.container}>
      <Row xs={2} md={4} lg={6}>
        {luxuryHomes.map((home) => (
          <PropertiesCards
            key={home.id}
            rooms={home.rooms}
            area={home.area}
            type={home.type}
            price={home.price}
            location={home.location}
            extImage={home.images.exterior}
            intImage={home.images.interior}
          />
        ))}
      </Row>
    </Container>
  );
}

export default PropertiesContainer;
