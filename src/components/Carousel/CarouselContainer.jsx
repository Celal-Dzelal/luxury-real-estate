import React from "react";
import CarouselStyle from "../../scss/carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";
import SearchInputs from "../Form/SearchInputs";
import { luxuryHomes } from "../../helpers/data";

function CarouselContainer() {
  const uniqueTypes = [...new Set(luxuryHomes.map((home) => home.type))];
  const uniqueLocations = [
    ...new Set(luxuryHomes.map((home) => home.location)),
  ];
  const uniqueRooms = [...new Set(luxuryHomes.map((home) => home.rooms))];
  return (
    <>
      <SearchInputs
        types={uniqueTypes}
        locations={uniqueLocations}
        rooms={uniqueRooms}
      />
      <Carousel data-bs-theme="dark" className={CarouselStyle.container}>
        <Carousel.Item className={CarouselStyle.item}>
          <img
            className={`d-block w-100 ${CarouselStyle.img}`}
            src="/img/slide-image1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className={CarouselStyle.caption}>
            <h3 className={CarouselStyle.title1}>
              Elegant Properties That Turn Your Dreams Into Reality
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={CarouselStyle.item}>
          <img
            className={`d-block w-100 ${CarouselStyle.img}`}
            src="/img/slide-image2.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption className={CarouselStyle.caption}>
            <h3 className={CarouselStyle.title2}>
              The New Address of Luxury and Comfort
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={CarouselStyle.item}>
          <img
            className={`d-block w-100 ${CarouselStyle.img}`}
            src="/img/slide-image3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption className={CarouselStyle.caption}>
            <h3 className={CarouselStyle.title3}>
              Unlock the Doors to a Prestigious Lifestyle
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselContainer;
