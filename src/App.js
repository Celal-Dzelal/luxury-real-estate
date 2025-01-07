import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import CarouselContainer from "./components/Carousel/CarouselContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
    </div>
  );
}

export default App;
