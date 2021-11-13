import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainCard from './mountain_card';

class MountainIndex extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      mountains: []
    }
  }

  componentDidMount(){
    // this.setState({mountains: this.fetchMountains()})
    this.props.getAllMountains().then( ()=>{
      this.setState({mountains: this.props.mountains})
    })
    
    
  }
  
  render(){
    if (!this.state.mountains.length) return null
    const mountList = this.state.mountains.map((mount,i) =>{
      return<MountainCard 
        key={i}
        mountain={mount}
        />
    })
    return <div className='card-deck'>{mountList}</div>
    
  }
}               

export default withRouter(MountainIndex)