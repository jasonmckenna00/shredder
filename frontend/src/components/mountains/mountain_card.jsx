import React from 'react';
import { withRouter } from 'react-router-dom';
import icon from '../../assets/icons/unknown.png';
import mountain_default from '../../assets/images/mountain-default.jpg'
class MountainCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currTemp: 0,
      currWeather: {},
      forecast:{},
      fetchAttempt: false
    }
  }

  componentDidMount(){
    this.fetchWeather()
  }

  fetchWeather(){
    // console.log(this.state)
    // console.log(this.state.location)
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
          let {temp,weather} = current
          let numDays = 3
          let forecast = daily.slice(0,numDays)
          this.setState({ currTemp: Math.floor(temp), currWeather: weather[0], forecast: forecast })
          
        })
      }
    })
  }

  handleTime(unixTime){
    // const time = new Date(unixTime * 1000)
    // const day = time.getDay()
    // const date = time.getDate()
    // const month = time.getMonth()
  }

  createForcastObject(weatherObject){
    // let {temp: {day},weather} = weatherObject
  }
  createWeatherIcon(){
    return <img className='weather-icon' src={icon} alt=''></img>
  }

  hasMountainCam(resort, website_link){
    let {resort_name} = resort
    const epicCamLink = '/the-mountain/mountain-conditions/mountain-cams.aspx'
    if (resort_name === "EPIC"){
      const mountainCamUrl = website_link + epicCamLink
      let classes = 'card-link fa fa-video-camera'
      return <a href={mountainCamUrl} target="_blank" className={classes} rel="noopener noreferrer">Cam</a>
    }
    return <></>
  }

  render(){
    if(!this.state.fetchAttempt) return null   //won't try to display anything without a fetch attempt
    let {name, website_link, location:{state},resort_company} = this.props.mountain
    // const mountainCam = this.hasMountainCam(resort_company,website_link)
    // let {icon} = this.state.currWeather
    // const cwIcon = this.createWeatherIcon(icon)
    const {description} = this.state.currWeather
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='card-title h4'>{name}</div>
          <div className='card-subtitle h6'>{state}</div>
          <img src={mountain_default} alt="" className='card-img-top'/>
          <div className='mountain-card-cw-temp'>Temperature: {this.state.currTemp}F</div>
           <div className='mountain-card-cw-cond'>{description}</div>
           <a href={website_link} target="_blank" className='card-link' rel="noopener noreferrer">Site</a>
           {/* {mountainCam} */}

        </div>
      </div>


      
    )
  }
}

export default withRouter(MountainCard)