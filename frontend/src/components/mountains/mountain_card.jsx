import React from 'react';
import { withRouter } from 'react-router-dom';

class MountainCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      curr_temp: 0,
      curr_conditions: {},
      day_one: {},
      day_two: {},
      day_three: {}
    }
  }

  componentDidMount(){
    let [lat, lon] = [40.6514,-111.5080]
    const API_KEY = process.env.REACT_APP_API_KEY
    let url_base = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}\&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
    fetch(url_base)
    .then( resp => {
      resp.json().then( obj => {
        // console.log(obj)
        let {current, daily} = obj
        let num_days = 3
        let forecast = daily.slice(0,num_days)
        // time = new Date(dt * 1000) => Mon Nov 08 2021 19:55:42 GMT-0500 (Eastern Standard Time)

        // console.log(current)
        
      })
    })
    // .catch( err => console.log(err.mess))

  }

  fetchWeather(location){
    //parse mountain coordinates
    // let lat, lon = parsed coords
    // let url_base = `api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}
    // &exclude=hourly,minutely&units=imperial&appid=${apikey}`
    //axios web request
    //current[temp]
    //current(weather object) ... 
    //daily[0][1][2] = next three days
    //dailys have temp object => day, min,max temps
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