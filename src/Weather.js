import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: "Monday 14:00",
            description: response.data.condition.description,
            iconUrl: "https://www.awxcdn.com/adc-assets/images/weathericons/18.svg",
            wind: response.data.wind.speed,
            city: response.data.name,

        });

    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input 
                        type="search" 
                        placeholder="Enter your city.." 
                        className="form-control" /> 
                    </div>
                    <div className="col-3">
                        <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-light w-100" />
                    </div>
                </div>
            </form>
            <h1>
                New York
            </h1>
            <ul>
                <li>{weatherData.time}</li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img 
                        src="https://www.awxcdn.com/adc-assets/images/weathericons/18.svg" alt="cloudy"
                    />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    } else {
    const apiKey = "06b0f64a63552tbee14aof0301449fb0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";
    }
}