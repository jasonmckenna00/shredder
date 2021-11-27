import React from 'react';
import { withRouter } from 'react-router-dom';
import mountain_default from '../../assets/images/mountain-default.jpg'
import MCWeatherCard from './mc_weather_card';
import { FAVORITE } from '../../utils/mountain_util';

class MountainCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
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
    // if(!this.state.fetchAttempt || !this.state.forecast) return null   //won't try to display anything without a fetch attempt
    let {name, website_link, location ,resort_company} = this.props.mountain
    const {state, city} = location
    const mountainCam = this.hasMountainCam(resort_company,website_link)
    // const weatherCard = this.weatherCard()
    let weatherCard = null
    if (this.props.type === FAVORITE){
      weatherCard = <MCWeatherCard location={location} />
    }
    
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='card-title h4'>{name}</div>
          <div className='card-subtitle h6'>{city}, {state}</div>
          <img src={mountain_default} alt="" className='card-img-top'/>
          {weatherCard}
          <a href={website_link} target="_blank" className='card-link' rel="noopener noreferrer">Site</a>
          {mountainCam}

        </div>
      </div>


      
    )
  }
}

export default withRouter(MountainCard)
