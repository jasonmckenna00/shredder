import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainCardContainer from './mountain_card_container';
import { FAVORITE } from '../../utils/mountain_util';
import equal from 'fast-deep-equal'
class MountainFavorites extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      favoriteMountains: [],
      fetchAttempt: false
    }
  }

  componentDidMount(){
    this.props.getFavoriteMountains([1,2])    
    .then(this.setState({favoriteMountains: this.props.favoriteMountains}))
    // .then(this.setState({fetchAttempt: true}))
  }

  componentDidUpdate(prevProps){
    if (!equal(this.props.favoriteMountains, prevProps.favoriteMountains)){
      this.setState({favoriteMountains: this.props.favoriteMountains})
    }
  }
  
  render(){
    // if (!this.state.mountains.length) return null
    // if (!this.state.fetchAttempt) return null    
    const mountList = this.state.favoriteMountains.map((mount,i) =>{
      return<MountainCardContainer 
        key={i}
        mountain={mount}
        type={FAVORITE}
        />
    })
    return <div className='card-deck'>
        Favorite Mountains
        {mountList}
      </div>
    
    
  }
}               

export default withRouter(MountainFavorites)