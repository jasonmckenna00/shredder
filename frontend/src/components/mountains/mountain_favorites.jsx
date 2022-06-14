import React, { useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import MountainCardContainer from './mountain_card_container';
import { FAVORITE } from '../../utils/mountain_util';

const MountainFavorites = ({getFavoriteMountains, favoriteMountains}) => {

  

  useEffect(() => {
    getFavoriteMountains([1,2])
    console.log('fetched')
  },[])


  const mountList = favoriteMountains.map((mount,i) =>{
    return<MountainCardContainer 
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