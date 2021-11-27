import React from 'react'
import MountainIndexContainer from '../mountains/mountain_index_container'


class MountainSearchBar extends React.Component{

  render(){
    return <div className='mountain-search-container'>
      <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
      </div>
      <MountainIndexContainer />
      </div>
  }
}

export default MountainSearchBar