import React from 'react';

import { withRouter } from 'react-router-dom';

class NavBar extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     status: true
  //   }
  // }


  render(){
    return(
      <div className='navbar'>
        navbar
      </div>

    )
  }
}

export default withRouter(NavBar)
