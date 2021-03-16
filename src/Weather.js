import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
 
  const [weatherData, setWeatherData] = useState({ ready:false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse (response) {
setWeatherData({
  ready: true, 
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  city: response.data.name,
  humidity: response.data.main.humidity,
  realFeel: response.data.main.feels_like,
  max: response.data.main.temp_max,
  min: response.data.main.temp_min,
  description: response.data.weather[0].description,
  date: new Date(response.data.dt * 1000),
  icon: response.data.weather[0].icon,
})
}
function search(){
 let apiKey = "74c313891ab91d11cf96230279a062ab";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function changeCity(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="field"
            autoComplete="off"
            onChange={changeCity}
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
          <div className="dayTime"><FormattedDate date={weatherData.date} /></div>
          <div className="description text-capitalize">{weatherData.description}</div>
        </h2>
        <p>
          <span className="mainWeatherIcon">
          <WeatherIcon code={weatherData.icon} />
          </span>
          <span className="WeatherTemperature">
          <WeatherTemperature celsius={Math.round(weatherData.temperature)} />
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
              <div className="card-body">Wind: {Math.round(weatherData.wind)} km/h</div>
            </div>
          </div>
        </div>
        <div className="row conditions">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                Max: {Math.round(weatherData.max)}ºC | Min: {Math.round(weatherData.min)}ºC
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                Real feel: {Math.round(weatherData.realFeel)}ºC
              </div>
            </div>
          </div>
        </div>
    </div>
  );
} else {
  search();
  return "Loading.."
}
  }