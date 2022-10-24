import React, { useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import MountainCard from './mountain_card';
import { FAVORITE } from '../../utils/mountain_util';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteMountains } from '../../actions/mountain_actions';


const FavoriteMountainsHome = () => {
  const favoriteMountains = useSelector(state => Object.values(state.favoriteMountains))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavoriteMountains([1,2,3,4,5,6,7,8,9,10,11,12,13]))
    // console.log('fetchedFavMountains')
  },[dispatch])

  const mountList = favoriteMountains.slice(0,5).map((mount,i) =>{
    return<MountainCard 
      key={i}
      mountain={mount}
      type={FAVORITE}
      />
  })

  
  return(
  <section className='favorite-mountains-abridged mt-5'>
    <div className='container-header'>
      <h3>Favorite Mountains</h3>
      <Link to={'/favorites'}><h6>View All</h6></Link>
      
    </div>
    <div className='favorite-mountains' >{mountList}</div>
  </section>
  )
}




export default withRouter(FavoriteMountainsHome)