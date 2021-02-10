import React from 'react';
import './Days.css';



export const Days = props => {
    var d = new Date(props.response.dt *1000);
    console.log(d)
    var date =d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();

    return (
    <div className='card'>
    
        <h4>Date:{date}</h4>
        <img src={`http://openweathermap.org/img/w/${props.response.weather[0].icon}.png`} alt="Loading.."></img> 
        <h4>{props.response.weather[0].description}</h4>
        <h3>Min Temp:{props.response.temp.min}°C</h3>
        <h3>Max Temp:{props.response.temp.max}°C</h3>
        
    </div>)
    
}

