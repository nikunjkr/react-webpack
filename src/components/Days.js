import React from 'react';
import './Days.css';

export const Days = props => {
    console.log(props.response)
    var d = new Date(props.response.dt *1000);
    console.log(d)
    var date =d.toString().split(' ')[1] + d.toString().split(' ')[2];
    var dayName = d.toString().split(' ')[0];


    return (
    <div className='card'>
        <h3>{dayName}</h3>
        <h4>{date}</h4>
        <img src={`http://openweathermap.org/img/w/${props.response.weather[0].icon}.png`} alt="Loading.."></img> 
        <h4>{props.response.weather[0].description}</h4>
        <h3>Min Temp:{props.response.temp.min}°C</h3>
        <h3>Max Temp:{props.response.temp.max}°C</h3>
        
    </div>)
    
}

