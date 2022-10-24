import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {MountainWeatherForecastItem} from '../mountains/mountain_weather';
import { getFavoriteMountains } from '../../actions/mountain_actions';

const FavoritesPageContainer = () => {
  const favoriteMountains = useSelector(state => Object.values(state.favoriteMountains))
  const favoriteMountainItems = favoriteMountains.map((mountain) => {
    return <FavoriteMountainItem mountain={mountain} key={mountain.id}/>
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavoriteMountains([1,2,3,4,5,6,7,8,9,10,11,12,13]))
  },[dispatch])


  return (
    <div className='content'>
      <section className='boxed' id='upcoming-trips'>
        <h3>Upcoming Trips</h3>
      </section>
      <section className='mt-5 boxed' id='favorite-mountain-index'>
        <h4>Favorite Mountains</h4>
        <div id='favorite-mountain-index-container'>
          {favoriteMountainItems}
        </div>
      </section>
    </div>
  )
}


const FavoriteMountainItem = ({mountain}) => {
  const {name, location:{city, state_code}, weather} = mountain
  const forecastWeatherItems = weather.forecast.slice(0,7).map( (weatherObj,i) => {
    return <MountainWeatherForecastItem weatherObject={weatherObj} key={i} />
  })
  return (
    <div className='boxed favorite-mountain-item mt-3'>
      <div className='favorite-mountain-item-header'>
        <h3>{name}</h3>
        <h5>{city}, {state_code}</h5>
      </div>
      <div className='favorite-mountain-top'>
        <div className='boxed'>picture</div>
        <div className='boxed'>
          {/* <p>Times Visited</p> */}
          <p>Lifts Open</p>
          <p>Snow Depth</p>
        </div> 
      </div>
      <div className='mc-weather-forecast'> 
          {forecastWeatherItems}
      </div>
    </div>
  )
}

export default withRouter(FavoritesPageContainer)