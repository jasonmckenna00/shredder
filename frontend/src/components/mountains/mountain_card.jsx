import React from 'react';
import { withRouter } from 'react-router-dom';
import mountain_default from '../../assets/images/mountain-default.jpg'
import MCWeatherCard from './mc_weather_card';
import { FAVORITE} from '../../utils/mountain_util';
import { PlusCircleDotted, XCircle } from 'react-bootstrap-icons'


const MountainCard = (props) => {
  const {mountain, type, favoriteMountainIds, addFavoriteMountain, removeFavoriteMountain} = props
  const {id} = mountain
  const mountainId = id.toString()



  const getMountainCam = (resort_name, website_link) => {
    
    if (resort_name === "EPIC"){
      const epicCamLink = '/the-mountain/mountain-conditions/mountain-cams.aspx'
      const mountainCamUrl = website_link + epicCamLink
      // let classes = 'fa fa-video-camera'
      // return<i className="bi bi-camera-video h 20"></i>
      // return <i className={classes} onClick={()=>window.open(mountainCamUrl, '_blank').focus()}></i>
      return <a href={mountainCamUrl} target="_blank" className='card-link' rel="noopener noreferrer">Snow Cams</a>
    }
    return null
  }

  const addToFavorites = () => {
    if (favoriteMountainIds.includes(mountainId)) return
    addFavoriteMountain(mountainId)
  }

  const removeFromFavorites = () => {
    if (favoriteMountainIds.includes(mountainId)){
      removeFavoriteMountain(mountainId)
    }
  }

  const {name, website_link, location ,resort_company: {resort_name}} = mountain
  const {state, city} = location
  const mountainCam = getMountainCam(resort_name,website_link)

  const favoriteAction = type === FAVORITE ? 
    <XCircle className='add-to-favorites-button' onClick={removeFromFavorites}/>:
    <PlusCircleDotted className='add-to-favorites-button' onClick={addToFavorites}/>


  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-title h4 d-flex justify-content-between align-items-center'>
          {name}
          <div>{favoriteAction}</div>
        </div>
        <div className='card-subtitle text-muted h6'>{city}, {state}</div>
        <img src={mountain_default} alt="" className='card-img-top'/>
        {type === FAVORITE && <MCWeatherCard location={location} />}


        <a href={website_link} target="_blank" className='card-link' rel="noopener noreferrer">Site</a>
        {mountainCam}

      </div>
    </div>
  )
}



export default withRouter(MountainCard)
