import React from "react";
import "./Weather.css";


export default function Weather() {
  let weatherData = {
    city: "Valencia",
    temperature: 20,
    date: "Tuesday 13:32",
    description: "Sunny",
    humidity: 20,
    wind: 4,
    max: 22,
    min: 18,
    realFeel: 21
  };

  return (
    <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className="field"
            autoComplete="off"
          />
          <input type="submit" value="Search" className="searchButton" />
          <input
            type="submit"
            value="Current location"
            className="currentLocation"
          />
        </form>
        <h2>
          <span className="city">{weatherData.city}</span>
          <div className="dayTime">{weatherData.date}</div>
          <div className="description">{weatherData.description}</div>
        </h2>
        <p>
          <img src="images/sun.png" alt="sunIcon" className="mainWeatherIcon" />
          <span className="temperature"> {weatherData.temperature}</span>
          <span className="units">
            <a href="/" className="active celsius">
              ºC
            </a>{" "}
            |
            <a href="/" className="fahrenheit">
              ºF
            </a>
          </span>
        </p>
        <div className="row conditions">
          <div className="col-6">
            <div className="card">
              <div className="card-body">Humidity: {weatherData.humidity}%</div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">Wind: {weatherData.wind} km/h</div>
            </div>
          </div>
        </div>
        <div className="row conditions">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                Max: {weatherData.max}ºC | Min: {weatherData.min}ºC
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                Real feel: {weatherData.realFeel}ºC
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}