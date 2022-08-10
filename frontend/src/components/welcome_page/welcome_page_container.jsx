import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainFavorites from '../mountains/mountain_favorites'
import MountainSearchBar from '../search_bar/mountain_search_bar';
// import MountainMapContainer from '../map/mountain_map_container';
import MountainIndex from '../mountains/mountain_index'
const WelcomePageContainer = () => {

  
  return(
    <div className='welcome-page-container'>
      Inside WelcomePageContainer
      <MountainSearchBar />
      <MountainIndex />
      <MountainFavorites />
      {/* <MountainMapContainer /> */}
    </div>
  )
}               

export default withRouter(WelcomePageContainer)