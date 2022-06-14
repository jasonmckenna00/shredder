import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainFavoritesContainer from '../mountains/mountain_favorites_container'
import MountainSearchBar from '../search_bar/mountain_search_bar';
import MountainIndexContainer from '../mountains/mountain_index_container' 
import MountainMapContainer from '../map/mountain_map_container';
const WelcomePageContainer = () => {

  
  return(
    <div className='welcome-page-container'>
      Inside WelcomePageContainer
      <MountainSearchBar />
      <MountainIndexContainer />
      <MountainFavoritesContainer />
      <MountainMapContainer />
    </div>
  )
}               

export default withRouter(WelcomePageContainer)