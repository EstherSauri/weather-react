import React from "react";
import HourlyWeatherIcon from "./HourlyWeatherIcon.js";

export default function WeatherForecastPreview(props) {
    function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

   function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

    return (
    <div className="WeatherForecastPreview col">
    <div className="card">
        <div className="card-body week">
      {hours()}
      <br />
      <HourlyWeatherIcon code={props.data.weather[0].icon} />
      <br />
      {temperature()}
      </div>
    </div>
    </div>
  );
}