import React, { useCallback, useEffect, useState } from 'react'
import MCWeatherItem from './mc_weather_item'
import {Button, Collapse} from 'react-bootstrap'


const MCWeatherCard = (props) => {
  const [currWeather, setCurrWeather] = useState({})
  const [forecast, setForecast] = useState([])
  const [forecastOpen, setForecastOpen] = useState(false)
  // const [fetchAttempt, setFetchAttempt] = useState(false)

  const fetchWeather = useCallback( ()=> {
    let {latitude,longitude} = props.location
    const API_KEY = process.env.REACT_APP_API_KEY
    let urlBase = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
    fetch(urlBase)
    .then( resp => {
      // setFetchAttempt(true)
      if (resp.ok){
        resp.json().then( weatherObj => {
          let {current, daily} = weatherObj
          let numDays = 3
          let forecast = daily.slice(0,numDays)
          setCurrWeather(current)
          setForecast(forecast)
        })
      } else {
        console.log('Unable to get weather')
      }
    })
  },[props.location])

  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

  
  
    
  

  const forecastWeatherContainer = () => {
    const weatherItems = forecast.map( (weatherObj,i) => {
      return <MCWeatherItem 
        key={i} 
        weatherType={'Forecast'}
        weatherObject={weatherObj}/>
    })

    return (
      <div className='mc-weather-item'> 
        <Collapse in={forecastOpen}>
          <div className='card-deck'>
            {weatherItems}
          </div>
        </Collapse>
      </div>
    )
  }

  const todayWeather = <MCWeatherItem weatherType={"Today"} weatherObject={currWeather}/>
  const forecastWeather = forecastWeatherContainer()
  return (
    <>
        {todayWeather}
        <Button 
          onClick={() => setForecastOpen(!forecastOpen)}
          aria-controls="example-collapse-text"
          aria-expanded={forecastOpen}
        >Forecast
        </Button>
        {forecastWeather}
      </>
  )

}



// class MCWeatherCard extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			currWeather:{},
//       forecast:[],
//       fetchAttempt: false,
//       forecastOpen: false,
//       setOpen: false
// 		}
// 	}

// 	componentDidMount(){
// 		this.fetchWeather()
// 	}

// 	fetchWeather(){
//     let {latitude,longitude} = this.props.location
//     const API_KEY = process.env.REACT_APP_API_KEY
//     let urlBase = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
//     fetch(urlBase)
//     .then( resp => {
//       this.setState({fetchAttempt: true})
//       if (!resp.ok) {
//         //handle failure
//         console.log("Unable to get weather")
//       }
      
//       else {
//         resp.json()
//         .then( obj => {
//           let {current, daily} = obj
//           let numDays = 3
//           let forecast = daily.slice(0,numDays)
//           this.setState({ currWeather: current, forecast: forecast })
//         })
//       }
//     })
//   }

// 	todayWeatherContainer(){
//     return <MCWeatherItem weatherType={"Today"} weatherObject={this.state.currWeather}/>
//   }

//   forecastWeatherContainer(){
//     const weatherItems = this.state.forecast.map( (weatherObj,i) => {
//       return <MCWeatherItem key={i} weatherType={'Forecast'} weatherObject={weatherObj}/>
//     })

//     return <div className='mc-weather-item'> 
//       <Collapse in={this.state.forecastOpen}>
//         <div className='card-deck'>
//           {weatherItems}
//         </div>
        
//       </Collapse>
//       </div>
//   }

// 	render(){
//     if(!this.state.fetchAttempt || !this.state.forecast) return null   //won't try to display anything without a fetch attempt
// 		const todayWeatherContainer = this.todayWeatherContainer()
//     const forecastWeatherContainer = this.forecastWeatherContainer()
//     return <>
    
// 			{todayWeatherContainer}
// 			<Button 
// 				onClick={() => this.setState({forecastOpen: !this.state.forecastOpen})}
// 				aria-controls="example-collapse-text"
// 				aria-expanded={this.state.forecastOpen}
// 			>Forecast
// 			</Button>
// 			{forecastWeatherContainer}
// 		</>
// 	}
// }

export default MCWeatherCard