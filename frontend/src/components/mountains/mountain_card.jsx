import React from 'react';
import { withRouter } from 'react-router-dom';

class MountainCard extends React.Component{
  
  render(){
    let {name, website_link, location} = this.props.mountain
    
    return(
      <div className='mountain-card'>
        <div className='mountain-card-name'>{name}</div>
        <div className='mountain-card-location'>{location}</div>
        <div className='mountain-card-website'>{website_link}</div>
        
      </div>
    )
  }
}

export default withRouter(MountainCard)