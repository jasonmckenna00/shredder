import React, {useState} from 'react'
import { searchMountains } from '../../actions/mountain_actions'
import { useDispatch } from "react-redux";


const MountainSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(searchMountains(searchQuery))
    setSearchQuery('')
  }
  
  return <div className='mountain-search-container'>
      <form className="input-group rounded" onSubmit={(e) =>handleSearch(e)}>
        <button className='search-icon' type='submit'></button>
        <input type="search" 
          className="form-control rounded" 
          placeholder="Search" 
          aria-label="Search" 
          aria-describedby="search-addon" 
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </form>
    
    </div>
  
}

export default MountainSearchBar