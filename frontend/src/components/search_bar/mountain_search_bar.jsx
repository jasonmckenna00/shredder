import React from 'react'



const MountainSearchBar = () => {

  
  return <div className='mountain-search-container'>
    <div className="input-group rounded">
      <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
    </div>
    
    </div>
  
}

export default MountainSearchBar