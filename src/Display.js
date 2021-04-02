import React from "react";
import "./Display.css";

export default function Display() {
  return (
    <div>
      <div className="container mainDisplay">
        <div className="row">
          <div className="col-4 p-0 m-0">
            <div className="card day-info">
              <div className="card-body dateInfo">
                <h5 className="todayDisplay card-title today-box">Saturday</h5>
                <p className="card-text date-time">March 13, 2021</p>
                <ul>
                  <li>
                    Humidity: <span id="humidity">27</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">13</span>mph
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 p-0 m-0">
            <div className="card day-image">
              <div className="card-body body-image">
                <img
                  src=" http://openweathermap.org/img/wn/10d@2x.png"
                  className="card-img-top"
                  alt="rain-cloud"
                />
                <p id="time">2:43 PM</p>
              </div>
            </div>
          </div>
          <div className="col-4 p-0 m-0">
            <div className="card day-temp">
              <div className="card-body body-temp">
                <strong className="card-title today-temp">47°</strong>

                <small className="card-text units">
                  <a href="/" className="tempLink active">
                    °F
                  </a>{" "}
                  |
                  <a href="/" className="tempLink">
                    °C
                  </a>
                  <br />
                </small>
                <span className="temp">Feels Like 34°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
