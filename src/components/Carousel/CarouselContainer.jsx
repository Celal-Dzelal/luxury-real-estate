import React from "react";
import CarouselStyle from "../../scss/carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

function CarouselContainer() {
  return (
    <Carousel data-bs-theme="dark" className={CarouselStyle.container}>
      <Carousel.Item className={CarouselStyle.item}>
        <img
          className={`d-block w-100 ${CarouselStyle.img}`}
          src="/img/CarouselImg(1).jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={CarouselStyle.title}>
            Elegant Properties That Turn Your Dreams Into Reality
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={CarouselStyle.item}>
        <img
          className={`d-block w-100 ${CarouselStyle.img}`}
          src="/img/CarouselImg(2).jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className={CarouselStyle.title}>
            The New Address of Luxury and Comfort
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={CarouselStyle.item}>
        <img
          className={`d-block w-100 ${CarouselStyle.img}`}
          src="/img/CarouselImg(3).jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className={CarouselStyle.title}>
            Unlock the Doors to a Prestigious Lifestyle
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
