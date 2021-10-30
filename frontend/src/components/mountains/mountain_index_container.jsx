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
    let mountains = [];
    let mount_keys = Object.keys(seed.Mountains)
    mount_keys.forEach( (mount_key) =>{
      let mount_json = seed['Mountains'][mount_key];
      mountains.push(mount_json)
      // let prop_keys = Object.keys(mount_json)
      // let new_mountain = new Mount
      // prop_keys.forEach( prop_key => {
        
      // })
      // console.log(mount_json)
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