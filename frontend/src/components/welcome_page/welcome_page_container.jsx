import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainIndex from '../mountains/mountain_index_container'
class WelcomePageContainer extends React.Component{

  render(){
    return(
      <div className='welcome-page-container'>
        Inside WelcomePageContainer
        <MountainIndex />
      </div>
    )
  }
}               

export default withRouter(WelcomePageContainer)