import React, { useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import MountainCard from './mountain_card';
import { FAVORITE } from '../../utils/mountain_util';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteMountains } from '../../actions/mountain_actions';


const MountainFavorites = () => {
  const favoriteMountains = useSelector(state => Object.values(state.favoriteMountains))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavoriteMountains([1,2]))
    // console.log('fetchedFavMountains')
  },[dispatch])

  const mountList = favoriteMountains.map((mount,i) =>{
    return<MountainCard 
      key={i}
      mountain={mount}
      type={FAVORITE}
      />
  })
  return(
  <div className='favorite-mountains'>
    <h3>Favorite Mountains</h3>
    <div className='card-deck'>
      
      {mountList}
    </div>

  </div>
  )
}




export default withRouter(MountainFavorites)