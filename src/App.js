import React, { useState } from "react";
import AppStyle from "./App.scss";
import Header from "./components/Header/Header";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import PropertiesContainer from "./components/Properties/PropertiesContainer";
import FooterCont from "./components/Footer/FooterCont";

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  return (
    <div className={AppStyle.app}>
      <Header setSelectedRoom={setSelectedRoom} />
      <CarouselContainer />
      <PropertiesContainer selectedRoom={selectedRoom} />
      <FooterCont />
    </div>
  );
}

export default App;
