import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import MainWeatherIcon from "./MainWeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherForecast from "./WeatherForecast.js";
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

        </form>
        <h2>
          <span className="city">{weatherData.city}</span>
          <div className="dayTime"><FormattedDate date={weatherData.date} /></div>
          <div className="description text-capitalize">{weatherData.description}</div>
        </h2>
        <p>
          <MainWeatherIcon code={weatherData.icon} />
          <WeatherTemperature celsius={Math.round(weatherData.temperature)} />
        </p>
        <div className="row conditions">
          <div className="col-6">
            <div className="card">
              <div className="card-body weatherConditions">Humidity: {weatherData.humidity}%</div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body weatherConditions">Wind: {Math.round(weatherData.wind)} km/h</div>
            </div>
          </div>
        </div>
        <div className="row conditions">
          <div className="col-6">
            <div className="card">
              <div className="card-body weatherConditions">
                Max: {Math.round(weatherData.max)}ºC | Min: {Math.round(weatherData.min)}ºC
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body weatherConditions">
                Real feel: {Math.round(weatherData.realFeel)}ºC
              </div>
            </div>
          </div>
        </div>
        <div className="WeatherForecast">
        <WeatherForecast city={weatherData.city} />
        </div>
    </div>
  );
} else {
  search();
  return "Loading.."
}
  }