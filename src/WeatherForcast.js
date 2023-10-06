import React from "react";
import "./WeatherForcast.css";
export default function WeatherForcast(){

    return (
        <div className="WeatherForcast">
          <div classNamae="row"></div>  
           <div className="col"></div>  
            <div className="WeatherForcast-day">Thu</div>  
             <div className="WeatherIcon">☀️</div>  
             <div className="WeatherForcast-temperature"> 
             <span className="WeatherTemp-max"> 18°</span>
             <span className="WeatherTemp-min"> 15°</span>   
             </div> 
        </div>

    )
}