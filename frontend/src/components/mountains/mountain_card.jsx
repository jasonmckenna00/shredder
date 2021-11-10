import React from 'react';
import { withRouter } from 'react-router-dom';

class MountainCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currTemp: {},
      currWeather: {},
      forecast:{}
    }
  }

  componentDidMount(){
    this.fetchWeather()
    

  }

  fetchWeather(){
    let [lat, lon] = [40.6514,-111.5080]
    const API_KEY = process.env.REACT_APP_API_KEY
    let urlBase = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
    fetch(urlBase)
    .then( resp => {
      if (!resp.ok) {
        //handle failure
        console.log("Unable to get weather")
      }
      
      else {
        resp.json()
        .then( obj => {
          let {current, daily} = obj
          let {weather} = current
          let numDays = 3
          let forecast = daily.slice(0,numDays)
          this.setState({ currTemp: current, currWeather: weather[0], forecast: forecast })
        })
      }
    })
  }

  handleTime(unixTime){
    const time = new Date(unixTime * 1000)
    const day = time.getDay()
    const date = time.getDate()
    const month = time.getMonth()
  }

  render(){
    let {name, website_link, location} = this.props.mountain
    
    return(
      <div className='mountain-card'>
        <div className='mountain-card-name'>{name}</div>
        <div className='mountain-card-location'>{location}</div>
        <div className='mountain-card-website'>{website_link}</div>
        
      </div>
    )
  }
}

export default withRouter(MountainCard)