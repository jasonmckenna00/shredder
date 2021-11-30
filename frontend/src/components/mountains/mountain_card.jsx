import React from 'react';
import { withRouter } from 'react-router-dom';
import mountain_default from '../../assets/images/mountain-default.jpg'
import MCWeatherCard from './mc_weather_card';
import { FAVORITE, INDEX } from '../../utils/mountain_util';
import { PlusCircleDotted, XCircle } from 'react-bootstrap-icons'

class MountainCard extends React.Component{
  constructor(props){
    super(props)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.removeFromFavorites = this.removeFromFavorites.bind(this)
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
    return null
  }

  addToFavorites(){
    let {id} = this.props.mountain
    id.toString()
    if (this.props.favoriteMountainIds.includes(id)) return
    this.props.addFavoriteMountain(id)
  }

  removeFromFavorites(){
    const {id} = this.props.mountain
    const mountainId = id.toString()

    // debugger
    if (this.props.favoriteMountainIds.includes(mountainId)){
      this.props.removeFavoriteMountain(mountainId)
    }
  }


  render(){
    // if(!this.state.fetchAttempt || !this.state.forecast) return null   //won't try to display anything without a fetch attempt
    let {name, website_link, location ,resort_company} = this.props.mountain
    const {state, city} = location
    const mountainCam = this.hasMountainCam(resort_company,website_link)
    let weatherCard = null
    let removeFavoriteButton = null
    if (this.props.type === FAVORITE){
      weatherCard = <MCWeatherCard location={location} />
      removeFavoriteButton = <XCircle className='add-to-favorites-button' onClick={this.removeFromFavorites}/>
    }
    let addFavoriteButton = null
    if (this.props.type === INDEX){
      addFavoriteButton = <PlusCircleDotted className='add-to-favorites-button' onClick={this.addToFavorites}/>
    }

    
    
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='card-title h4 d-flex justify-content-between align-items-center'>
            {name}{addFavoriteButton}{removeFavoriteButton}
          </div>
          <div className='card-subtitle text-muted h6'>{city}, {state}</div>
          
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
