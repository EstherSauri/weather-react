import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
}
   
if (loaded && props.city === forecast.city.name) {
    return (
        <div className="WeatherForecast row projections" >
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        </div>
    );
} else {
    let apiKey = "74c313891ab91d11cf96230279a062ab";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showForecast);
    return null;
}
}