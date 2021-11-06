import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainIndexContainer from '../mountains/mountain_index_container'
class WelcomePageContainer extends React.Component{

  render(){
    return(
      <div className='welcome-page-container'>
        Inside WelcomePageContainer
        <MountainIndexContainer />
      </div>
    )
  }
}               

export default withRouter(WelcomePageContainer)