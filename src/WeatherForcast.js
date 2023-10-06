import React from "react";
import "./WeatherForcast.css";
import WeatherIcon from "./WeatherIcon"
export default function WeatherForcast(){

    return (
        <div className="WeatherForcast">
          <div classNamae="row"></div>  
           <div className="col"></div>  
            <div className="WeatherForcast-day">Thu</div>  
             <WeatherIcon/> 
             <div className="WeatherForcast-temperature"> 
             <span className="WeatherTemp-max"> 18°</span>
             <span className="WeatherTemp-min"> 15°</span>   
             </div> 
        </div>

    )
}