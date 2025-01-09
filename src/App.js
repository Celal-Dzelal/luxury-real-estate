import React from "react";
import AppStyle from "./App.scss";
import Header from "./components/Header/Header";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import PropertiesContainer from "./components/Properties/PropertiesContainer";

function App() {
  return (
    <div className={AppStyle.app}>
      <Header />
      <CarouselContainer />
      <PropertiesContainer />
    </div>
  );
}

export default App;
