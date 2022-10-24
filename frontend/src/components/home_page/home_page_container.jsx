import React  from 'react';
import { withRouter } from 'react-router-dom';
import FavoriteMountainsHome from '../mountains/favorite_mountains_home'
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

// import MountainSearchBar from '../search_bar/mountain_search_bar';
// import MountainMapContainer from '../map/mountain_map_container';
import FeaturedMountains from '../mountains/featured_mountains'
import Header from './header';
import MountainSearchResults from './mountain_search_results';
const HomePage = () => {

  const searchResults = useSelector(state => Object.values(state.searchMountains))
 
  const searchOrFeatured = searchResults.length > 0 ? <MountainSearchResults/> : <FeaturedMountains />
  return(
    <main className='welcome-page-container'>
      <Header />
      <div className='content'>
        {searchOrFeatured}
        <FavoriteMountainsHome /> 

      </div>
      {/* <MountainMapContainer /> */}
    </main>
  )
}               

export default withRouter(HomePage)