import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainFavoritesContainer from '../mountains/mountain_favorites_container'
import MountainSearchBar from '../search_bar/mountain_search_bar';

const WelcomePageContainer = () => {

  
  return(
    <div className='welcome-page-container'>
      Inside WelcomePageContainer
      <MountainSearchBar />
      <MountainFavoritesContainer />
    </div>
  )
}               

export default withRouter(WelcomePageContainer)