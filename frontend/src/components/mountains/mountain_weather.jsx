import React, { useCallback, useEffect, useState } from 'react'
import {Button, Collapse} from 'react-bootstrap'
import localWeatherJson from './weatherItem.json'
import icon from '../../assets/icons/unknown.png';
export const MountainWeather = (props) => {
  const {hideForecast = false} = props
  const [currWeather, setCurrWeather] = useState({})
  const [forecast, setForecast] = useState([])
  const [forecastOpen, setForecastOpen] = useState(false)
  
  const fetchWeather = useCallback( ()=> {
    if (!props.weather){
      let {current, daily} = localWeatherJson
      let numDays = props.numDays
      let forecast = daily.slice(0,numDays)
      setCurrWeather(current)
      setForecast(forecast)
    }
      // let {latitude,longitude} = props.location
      // const API_KEY = process.env.REACT_APP_API_KEY
      // let urlBase = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
    
      // fetch(urlBase)
      // .then( resp => {
      //   // setFetchAttempt(true)
      //   if (resp.ok){
      //     resp.json().then( weatherObj => {
      //       let {current, daily} = weatherObj
      //       let numDays = 3
      //       let forecast = daily.slice(0,numDays)
      //       setCurrWeather(current)
      //       setForecast(forecast)
      //       console.log('Fetched Weather')
      //       // console.log(JSON.stringify(weatherObj))
      //     })
      //   } else {
      //     console.log('Unable to get weather')
      //   }
      // })
    
  },[])


  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

  
  const captitalizeString = (string) => {
    let newStr = string.split(' ').map(word =>{
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return newStr.join(' ')
  }
    
  const degToCompass = (num) =>{
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

  let {temperature, snow ,wind_speed, wind_deg, weather_description} = props.weather || {}
  if (!weather_description) {
    console.error('Unable to get weather')
    return null
  }
  let description = captitalizeString(weather_description)
  let temp = Math.floor(temperature)
  wind_speed = Math.floor(wind_speed)
  const snowTotal = snow ? snow['1h'] : 0.0

  const forecastWeatherItems = props.weather.forecast.slice(0,props.numDays).map( (weatherObj,i) => {
    return <MountainWeatherForecastItem weatherObject={weatherObj} key={i} />
  })

  const showForecast = hideForecast ? <></> : <>
    <Button 
        onClick={() => setForecastOpen(!forecastOpen)}
        aria-controls="example-collapse-text"
        aria-expanded={forecastOpen}
      >
        Forecast
      </Button>
      <Collapse in={forecastOpen}>
        <div className='mc-weather-forecast'> 
          {forecastWeatherItems}
        </div>
      </Collapse>
  </>
  
  return (
    <>
      <div className='mc-weather-today'>
        <img src={icon} alt="" className='card-img-top weather-icon'/>
        <div className='weather-temp h3'>{temp}{'\u00b0'}</div>
        <div className='weather-conditions ml-3 mt-2'>
          <p className='h6'>Snowfall: {snowTotal}"</p>
          <p className='weather-conditions-wind h6'>Wind: {degToCompass(wind_deg)} {wind_speed} mph</p>
          <p className='weather-conditions-desc h6'>{description}</p>
        </div>
      </div>
      {showForecast}
    </>
  )

}

export const MountainWeatherForecastItem = ({weatherObject}) => {
    const getWeekDay = (timeObj) => {
      let dayNum = timeObj.getDay()
      const daysOfWeek = ['Sun','Mon', 'Tues', 'Wed', 'Thurs','Fri','Sat']
      return daysOfWeek[dayNum]
    }
    const {temp, dt} = weatherObject || {}
    const {min, max} = temp
    const time = new Date(dt * 1000)

    return <>
      <div className='mc-weather-item'>
        <p className='mb-0'>{getWeekDay(time)} {time.getDate()}</p>
        <img src={icon} alt="" className='card-img-top weather-icon'/>
        <div className='mc-weather-today-temp'>
          <p className='card-title h6'>{Math.floor(max)}{'\u00b0'}/</p>
          <p className='card-subtitle h7'>{Math.floor(min)}{'\u00b0'}</p>
        </div>
      </div>
    
    </>
    
}

