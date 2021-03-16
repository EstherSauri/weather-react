import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
        <span className="WeatherTemperature">
    <span className="temperature"> {Math.round(props.celsius)}</span>
          <span className="units">
            <a href="/" className="active celsius">
              ºC
            </a>{" "}
            |
            <a href="/" className="fahrenheit" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
          </span>
    );
  } else {
    return (
   <span className="WeatherTemperature">
    <span className="temperature"> {Math.round(fahrenheit())}</span>
          <span className="units">
            <a href="/" className="celsius" onClick={showCelsius}>
              ºC
            </a>{" "}
            |
            <a href="/" className="active fahrenheit">
              ºF
            </a>
          </span>
          </span>
    );
  }
}

