import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      himidity: response.data.main.humidity,
      date:"Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",

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
                placeholder="Search for a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li> {weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <span className="temperature">
                  ${Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>Humidity:{weatherData.himidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    const apiKey = "a8c8b76f9ba59324a0e2ad20oe25b3t3";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
