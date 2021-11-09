import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainIndexContainer from '../mountains/mountain_index_container'
import MountainSearchBar from '../search_bar/mountain_search_bar';
class WelcomePageContainer extends React.Component{

  render(){
    return(
      <div className='welcome-page-container'>
        Inside WelcomePageContainer
        <MountainSearchBar />
        <MountainIndexContainer />
      </div>
    )
  }
}               

export default withRouter(WelcomePageContainer)