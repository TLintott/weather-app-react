import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
    <div className="Weather">
      <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control" 
                autoFocus="on"/>
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
      <h1>London</h1>
        <ul>
          <li>Tuesday 11:23 </li>
          <li> Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" className="float-left"/>
            
            <span className="temperature">16</span>
            <span className="unit">°C</span>
           
            </div>
          </div>
           <div className="col-6">
          <ul>
            <li>Percipitation:1% </li>
            <li>Humidity: 69%</li>
            <li>Wind: 9mph</li>
            </ul>   
        </div>
        </div>
    </div>
    )
}