import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon"
import axios from "axios";

import "./WeatherForecast.css";


export default function WeatherForcast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleResponse(response){
    //console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
    }


if (loaded){
   
    return (
        <div className="WeatherForecast">
          <div className="row"></div>  
           <div className="col"></div>  
            <div className="WeatherForecast-day">Thu</div>  
            <WeatherIcon code="clear-sky-day" size={36}/> 
             <div className="WeatherForecast-temperature"> 
             <span className="WeatherTemp-max">{forecast[0].temperature.maximum}°</span>
             <span className="WeatherTemp-min"> 15°</span>   
             </div> 
        </div>

    );

} else {

    let longitude = props.coordinates.longituide;
    let latitude = props.coordinates.latitude;
    let apiKey = "4b123t2611cd046f6e3o15d4a0230eef"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

return null;

}

}

