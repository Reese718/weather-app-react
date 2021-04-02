import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="container hourly-forecast">
      <h3 className="weatherReport">Weather Report</h3>

      <hr />
      <div id="fiveDay" className="container five-day-forecast row"></div>
      <div className="row">
        <div class="col-2  ml-0 m-1">
          <div class="card hourlyCard one">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clouds"
            />
            <h5 className="card-title">4 PM</h5>
            <p className="fiveDay-text">
              47°H
              <br />
              47°L
            </p>
          </div>
        </div>

        <div className="col-2 m-1">
          <div className="card hourlyCard two">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clouds"
            />
            <h5 className="card-title hour-time">7 PM</h5>
            <p className="fiveDay-text">
              46°H
              <br />
              46°L
            </p>
          </div>
        </div>

        <div className="col-2 m-1">
          <div className="card hourlyCard three">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clouds"
            />
            <h5 className="card-title hour-time">10 PM</h5>
            <p className="fiveDay-text">
              45°H
              <br />
              44°L
            </p>
          </div>
        </div>

        <div className="col-2 m-1">
          <div className="card hourlyCard four">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clouds"
            />
            <h5 className="card-title hour-time">1 AM</h5>
            <p className="fiveDay-text">
              42°H
              <br />
              42°L
            </p>
          </div>
        </div>

        <div className="col-2 m-1">
          <div className="card hourlyCard five">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="clouds"
            />
            <h5 className="card-title hour-time">5 AM</h5>
            <p className="fiveDay-text">
              40°H
              <br />
              40°L
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
