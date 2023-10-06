import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
const codeMapping = {
"clear-sky-day": "CLEAR_DAY",
"clear-sky-night": "CLEAR_Night",
"few-clouds-day": "PARTLY_CLOUDY_DAY",
"few-clouds-night": "PARTLY_CLOUDY_NIGHT",
"scattered-clouds-day": "CLOUDY",
"scatterd-clouds-night": "CLOUDY",
"broken-clouds-day": "PARTLY_CLOUDY_DAY",
"broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
"shower-rain-day": "RAIN",
"shower-rain-night": "RAIN",
"rain-day": "RAIN",
"rain-night": "RAIN",
"thunderstorm-day": "RAIN",
"thunderstorm-night": "RAIN",
"snow-day": "SNOW",
"snow-night": "SNOW",
"mist-day": "FOG",
"mist-night": "FOG",

}

    return (
<ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#4C31A1"
    size={64}
    animate={true}
  />
    );

}