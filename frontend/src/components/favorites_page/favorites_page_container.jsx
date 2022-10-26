import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {MountainWeather, MountainWeatherForecastItem} from '../mountains/mountain_weather';
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
        <div id='favorite-mountain-index-items'>
          {favoriteMountainItems}
        </div>
      </section>
    </div>
  )
}
// elevation info
// status
// snow depth
// runs open
// ski lifts
// https://www.skiresort.info/ski-resorts/usa/
const FavoriteMountainItem = ({mountain}) => {
  const {name, location:{city, state_code}, weather} = mountain
  const forecastWeatherItems = weather.forecast.slice(0,7).map( (weatherObj,i) => {
    return <MountainWeatherForecastItem weatherObject={weatherObj} key={i} />
  })
  return (
    <div className='boxed favorite-mountain-item mt-3'>
      <div className='container-header'>
        <div className='favorite-mountain-name'>
          <h3>{name}</h3>
          <h5>{city}, {state_code}</h5>
        </div>
        <div className='visited-count'><h6> Visited: 0</h6></div>
      </div>
      <div className='favorite-mountain-content'>
        <div className='boxed'>picture</div>
        <div className='favorite-mountain-info'>
          <div className='favorite-mountain-conditions'>
            <MountainWeather hideForecast={true} weather={weather}/>
            <div className='mountain-status'>
              <h5>Status</h5>
              <h6>Open</h6>
            </div>   
          </div>
          <div className='mountain-runs'>
            <ul className='p-0'>
              <li style={{"listStyle": "none"}}>Runs Open:</li>
              <li style={{"listStyle": "none"}}>Lifts Open:</li>
            </ul>
            <ul>
              <li style={{"listStyle": "none"}}>Snow Depth:</li>
              <li style={{"listStyle": "none"}}>Elevation:</li>
            </ul>
          </div>
        </div> 
      </div>
      <div className='weather-forecast'> 
          {forecastWeatherItems}
      </div>
    </div>
  )
}

export default withRouter(FavoritesPageContainer)