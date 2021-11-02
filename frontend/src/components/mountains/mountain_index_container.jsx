import React from 'react';
import { withRouter } from 'react-router-dom';
import MountainCard from './mountain_card';
import seed from '../../default-seed.json';

class MountainIndex extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      mountains: []
    }
  }

  componentDidMount(){
    this.setState({mountains: this.fetchMountains()})
    // console.log(this.state.mountains)
  }


  fetchMountains(){
    let mount_keys = Object.keys(seed.Mountains)
    let mountains = mount_keys.map( (mount_key) =>{
      return seed['Mountains'][mount_key];
    })
    
    return mountains
  } 

  
  render(){
    if (!this.state.mountains) return null
    const mountList = this.state.mountains.map((mount,i) =>{
      return<MountainCard 
        key={i}
        mountain={mount}
        />
    })
    return <div className='mountain-index'>{mountList}</div>
    
  }
}               

export default withRouter(MountainIndex)