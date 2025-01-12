import React from "react";
import CarouselStyle from "../../scss/carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

function CarouselContainer() {
  return (
    <>
      <Carousel
        // fade
        data-bs-theme="dark"
        className={CarouselStyle.container}
        interval={3000}
      >
        <Carousel.Item className={CarouselStyle.item}>
          <img
            className={`d-block w-100 ${CarouselStyle.img}`}
            src="img/slide-image1.jpeg"
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
            src="img/slide-image2.jpeg"
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
            src="img/slide-image3.jpeg"
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
