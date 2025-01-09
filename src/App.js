import React from "react";
import AppStyle from "./App.scss";
import Header from "./components/Header/Header";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import PropertiesContainer from "./components/Properties/PropertiesContainer";
import FooterCont from "./components/Footer/FooterCont";

function App() {
  return (
    <div className={AppStyle.app}>
      <Header />
      <CarouselContainer />
      <PropertiesContainer />
      <FooterCont />
    </div>
  );
}

export default App;
