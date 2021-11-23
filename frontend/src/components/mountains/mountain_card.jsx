import React from 'react';
import { withRouter } from 'react-router-dom';
import mountain_default from '../../assets/images/mountain-default.jpg'
import MCWeatherItem from './mc_weather_item';
import {Button, Collapse} from 'react-bootstrap'


class MountainCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currWeather:{},
      forecast:[],
      fetchAttempt: false,
      forecastOpen: false,
      setOpen: false
    }
  }
  componentDidMount(){
    this.fetchWeather()
  }

  fetchWeather(){
    let { location }= this.props.mountain
    let {latitude,longitude} = location
    const API_KEY = process.env.REACT_APP_API_KEY
    let urlBase = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
    fetch(urlBase)
    .then( resp => {
      this.setState({fetchAttempt: true})
      if (!resp.ok) {
        //handle failure
        console.log("Unable to get weather")
      }
      
      else {
        resp.json()
        .then( obj => {
          let {current, daily} = obj
          let numDays = 3
          let forecast = daily.slice(0,numDays)
          this.setState({ currWeather: current, forecast: forecast })
        })
      }
    })
  }

  

  
  todayWeatherContainer(){
    return <MCWeatherItem weatherType={"Today"} weatherObject={this.state.currWeather}/>
  }

  forecastWeatherContainer(){
    const weatherItems = this.state.forecast.map( (weatherObj,i) => {
      return <MCWeatherItem key={i} weatherType={'Forecast'} weatherObject={weatherObj}/>
    })

    return <div className='mc-weather-item'> 
      <Collapse in={this.state.forecastOpen}>
        <div className='card-deck'>
          {weatherItems}
        </div>
        
      </Collapse>
      </div>
    // return <MCWeatherItem weatherType={"Forecase"} weatherObject={this.state.forecast[0]} />
  }

  hasMountainCam(resort, website_link){
    let {resort_name} = resort
    const epicCamLink = '/the-mountain/mountain-conditions/mountain-cams.aspx'
    if (resort_name === "EPIC"){
      const mountainCamUrl = website_link + epicCamLink
      // let classes = 'fa fa-video-camera'
      // return<i className="bi bi-camera-video h 20"></i>
      // return <i className={classes} onClick={()=>window.open(mountainCamUrl, '_blank').focus()}></i>
 

      return <a href={mountainCamUrl} target="_blank" className='card-link' rel="noopener noreferrer">Snow Cams</a>
    }
    return <></>
  }


  render(){
    if(!this.state.fetchAttempt || !this.state.forecast) return null   //won't try to display anything without a fetch attempt
    let {name, website_link, location:{state, city},resort_company} = this.props.mountain
    const mountainCam = this.hasMountainCam(resort_company,website_link)
    const todayWeatherContainer = this.todayWeatherContainer()
    const forecastWeatherContainer = this.forecastWeatherContainer()
    
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='card-title h4'>{name}</div>
          <div className='card-subtitle h6'>{city}, {state}</div>
          <img src={mountain_default} alt="" className='card-img-top'/>
          {todayWeatherContainer}
          <Button 
            onClick={() => this.setState({forecastOpen: !this.state.forecastOpen})}
            aria-controls="example-collapse-text"
            aria-expanded={this.state.forecastOpen}
          >Click
          </Button>
          {forecastWeatherContainer}
          <a href={website_link} target="_blank" className='card-link' rel="noopener noreferrer">Site</a>
          {mountainCam}

        </div>
      </div>


      
    )
  }
}

export default withRouter(MountainCard)