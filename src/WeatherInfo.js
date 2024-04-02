import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>
                {props.data.city}
            </h1>
            <ul>
                <li><FormattedDate date={props.data.date}/></li>
                <li>{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img 
                        src="https://www.awxcdn.com/adc-assets/images/weathericons/18.svg" alt="cloudy"
                    />
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}
