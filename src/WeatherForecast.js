import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherForcast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForcast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

useEffect(() => {
 setLoaded(false);
  }, [props.coordinates]);


function handleResponse(response){
    //console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
    }

if (loaded) {
//console.log(forecast);
    return (
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function(daileyForecast, index){
              if (index < 6){
              return(
                      <div className="col" key={index}>
           <WeatherForecastDay data={daileyForecast}/>
            </div>  
              )
              }
            })}
      
          </div>
        </div>
    );

} else {

  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiKey = "4b123t2611cd046f6e3o15d4a0230eef";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return null;

}
}

