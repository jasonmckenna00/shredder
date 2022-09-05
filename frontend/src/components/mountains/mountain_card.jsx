import React from 'react';
import { withRouter } from 'react-router-dom';
import mountain_default from '../../assets/images/mountain-default.jpg'
// import no_image from '../../assets/images/video-not-working.png'
import MCWeatherCard from './mc_weather_card';
import { FAVORITE} from '../../utils/mountain_util';
import { PlusCircleDotted, XCircle } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMountain,  removeFavoriteMountain } from '../../actions/mountain_actions';



const MountainCard = ({mountain, type}) => {
  
  const favoriteMountainIds = useSelector(state => Object.keys(state.favoriteMountains))
  const {id} = mountain
  const mountainId = id.toString()
  const dispatch = useDispatch()


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
    dispatch(addFavoriteMountain(mountainId))
  }

  const removeFromFavorites = () => {
    if (favoriteMountainIds.includes(mountainId)){
      dispatch(removeFavoriteMountain(mountainId))
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
        <div className='card-title card-title-header'>
          <h3>{name}</h3>
          {favoriteAction}
        </div>
        <div className='card-subtitle text-align-center text-muted h6 '>{city}, {state}</div>
        <img src={mountain_default} alt="" className='card-img-top'/>
        {type === FAVORITE && <MCWeatherCard location={location} />}


        <a href={website_link} target="_blank" className='card-link' rel="noopener noreferrer">Site</a>
        {mountainCam}

      </div>
    </div>
  )
}



export default withRouter(MountainCard)
