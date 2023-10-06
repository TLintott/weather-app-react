import React from "react";
import "./WeatherForcast.css";
import WeatherIcon from "./WeatherIcon"
import axios from "axios";



export default function WeatherForcast(props){
    function handleResponse(response){
        //console.log(response.data);
    }
console.log(props);

    let apiKey = "4b123t2611cd046f6e3o15d4a0230eef"
    let lon = props.coordinates.longituide;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForcast">
          <div className="row"></div>  
           <div className="col"></div>  
            <div className="WeatherForcast-day">Thu</div>  
            <WeatherIcon code="clear-sky-day" size={36}/> 
             <div className="WeatherForcast-temperature"> 
             <span className="WeatherTemp-max"> 18°</span>
             <span className="WeatherTemp-min"> 15°</span>   
             </div> 
        </div>

    )
}