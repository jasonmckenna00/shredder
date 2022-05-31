import React, { useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import MountainCardContainer from './mountain_card_container';
import { FAVORITE } from '../../utils/mountain_util';

const MountainFavorites = (props) => {
  useEffect(() => {
    props.getFavoriteMountains([1,2])
  },[])


  const mountList = props.favoriteMountains.map((mount,i) =>{
    return<MountainCardContainer 
      key={i}
      mountain={mount}
      type={FAVORITE}
      />
  })
  return(
    <div className='card-deck'>
      Favorite Mountains
      {mountList}
    </div>
  )
}




export default withRouter(MountainFavorites)