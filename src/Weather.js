import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

//

export default function Weather(props){
const [weatherData, setWeatherData] =useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
        setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time *1000),
      icon:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`, 
      description:response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      feels: response.data.temperature.feels_like,
      
    });
  }

  //search City function............................
  
function search(){
 const apiKey = "4b123t2611cd046f6e3o15d4a0230eef";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
  }
  
  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
  setCity(event.target.value);  
  }

 //.........................................
  if (weatherData.ready){
  return(
    <div className="Weather">
      <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control" 
                autoFocus="on"
                onChange={handleCityChange}
                />
                
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn w-100 w-btn"
              />
            </div>
          </div>
        </form>
      <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date}/></li>
          <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
          <img src= {weatherData.icon}
           className="float-left"
            alt="{weatherData.description}"/>
           
            <WeatherTemperature celsius={props.data.temperature.current} />
        
           
            </div>
          </div>
           <div className="col-6">
          <ul>
            <li>Feels Like: {Math.round(weatherData.feels)}°C </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
            </ul>   
        </div>
        </div>
    </div>
    )
} else {

  search();
   return "Loading...";
  
}

}