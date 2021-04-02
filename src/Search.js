import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="weatherBody" className="Search">
      <h1 className="city-name">New York</h1>

      <form className="search-form">
        <button type="button" className="currentLocation">
          <i className="fas fa-map-marker-alt"></i>
        </button>
        <input
          className="col-8"
          type="text"
          placeholder="Enter City"
          className="enter-city"
          className="search-city"
          autofocus="on"
          autocomplete="off"
        />
        <button className="citySearchButton">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
