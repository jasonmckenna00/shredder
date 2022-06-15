import React from 'react';
import icon from '../../assets/icons/unknown.png';

const MCWeatherItem = ({weatherType, weatherObject}) => {

  const degToCompass = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

  const getWeekDay = (timeObj) => {
    let dayNum = timeObj.getDay()
    const daysOfWeek = ['Sun','Mon', 'Tues', 'Wed', 'Thurs','Fri','Sat']
    return daysOfWeek[dayNum]
  }

  const captitalizeString = (string) => {
    let newStr = string.split(' ').map(word =>{
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return newStr.join(' ')
  }

  const renderToday = (weatherObject) => {
    let {temp, snow ,wind_speed, wind_deg, weather} = weatherObject || {}
    if (!weather) return null
    let description = weather[0]['description']
    description = captitalizeString(description)
    temp = Math.floor(temp)
    wind_speed = Math.floor(wind_speed)
    const snowTotal = snow ? snow['1h'] : 0.0

    return(
    <div className='mc-weather-item'>
        <div className='mc-weather-today'>
          <img src={icon} alt="" className='card-img-top weather-icon'/>
          <div className='weather-temp h3'>{temp}{'\u00b0'}</div>
          <div className='weather-conditions ml-3 mt-2'>
            <p className='h6'>Snowfall: {snowTotal}"</p>
            <p className='weather-conditions-wind h6'>Wind: {degToCompass(wind_deg)} {wind_speed} mph</p>
            <p className='weather-conditions-desc h6'>{description}</p>
          </div>
        </div>
    </div>
    )
    
  }

  const renderForcastDay = (weatherObject) => {
    
    const {temp, dt} = weatherObject || {}
    const {min, max} = temp
    const time = new Date(dt * 1000)
    return(
      <div className='card mc-weather-item'> 
        <div className='card-body mc-weather-day'>
          <img src={icon} alt="" className='card-img-top weather-icon'/>
          <div className='mc-weather-today-temp'>
            <p className='card-title h6'>{Math.floor(max)}{'\u00b0'}/</p>
            <p className='card-subtitle h7'>{Math.floor(min)}{'\u00b0'}</p>
          </div>
          <p className='card-subtitle'>{getWeekDay(time)} {time.getDate()}</p>
        </div>
      </div>
      // <div></div>
    )
    //show high and low
    //icon + description
  }

  return (
    <>
      {weatherObject && weatherType === 'Today' ? 
        renderToday(weatherObject) : 
        renderForcastDay(weatherObject)
      }
    
    </>
  )
}

export default MCWeatherItem