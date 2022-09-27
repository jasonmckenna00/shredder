import React  from 'react';
import { withRouter } from 'react-router-dom';
import MountainFavorites from '../mountains/mountain_favorites'
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

// import MountainSearchBar from '../search_bar/mountain_search_bar';
// import MountainMapContainer from '../map/mountain_map_container';
// import FeaturedMountains from '../mountains/featured_mountains'
import Header from '../header/header';
import MountainSearchResults from '../search_bar/mountain_search_results';
const WelcomePageContainer = () => {

  const searchResults = useSelector(state => Object.values(state.searchMountains))
 
  
  return(
    <div className='welcome-page-container'>
      <Header />
      {searchResults.length > 0 && <MountainSearchResults/>}
      <MountainFavorites /> 
      {/* <MountainMapContainer /> */}
    </div>
  )
}               

export default withRouter(WelcomePageContainer)