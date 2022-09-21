import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainFavorites from '../mountains/mountain_favorites'
// import MountainSearchBar from '../search_bar/mountain_search_bar';
// import MountainMapContainer from '../map/mountain_map_container';
import FeaturedMountains from '../mountains/featured_mountains'
import Header from '../header/header';
const WelcomePageContainer = () => {

  
  return(
    <div className='welcome-page-container'>
      <Header />
      <FeaturedMountains />
      <MountainFavorites /> 
      {/* <MountainMapContainer /> */}
    </div>
  )
}               

export default withRouter(WelcomePageContainer)