import { useState } from "react";
import React from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8922d9269e385fb82a90f182de433573`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app-weather">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Entere Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">

          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? <h1>{(data.main.temp - 273.15).toFixed(1)}Celsius</h1> : null}
          </div>
          
        </div>

        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{(data.main.feels_like - 273.15).toFixed(1)}Celsius</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed} MPH </p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;