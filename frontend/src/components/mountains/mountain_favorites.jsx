import React, { useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import MountainCard from './mountain_card';
import { FAVORITE } from '../../utils/mountain_util';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteMountains } from '../../actions/mountain_actions';

const MountainFavorites = () => { 
  const dispatch = useDispatch()
  const favoriteMountains = useSelector(state => Object.values(state.favoriteMountains))



  useEffect(() => {
    dispatch(getFavoriteMountains([3,2]))
  },[dispatch])

  // this is placing them in state order? add telluride after snow
  // answer -> fave mountains is an obj, not pushing into arr
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