import React from "react";
import Search from "./Search";
import Display from "./Display";
import Description from "./Description";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Display />
      <Description />
      <Forecast />
      <Footer />
    </div>
  );
}
