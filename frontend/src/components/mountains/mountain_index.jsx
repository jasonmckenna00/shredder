import React from 'react'
import { withRouter } from 'react-router'
import { INDEX } from '../../utils/mountain_util'
import MountainCard from '../mountains/mountain_card'
class MountainIndex extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mountains: [],
    }
  }
  componentDidMount(){
    this.props.getAllMountains().then(() => {
      this.setState({mountains: this.props.mountains})
    })
  }

  render(){
    if (!this.state.mountains) return null
    const mountList = this.state.mountains.map((mount,i) =>{
      return<MountainCard 
        key={i}
        mountain={mount}
        type={INDEX}
        />
    })
    return <div className='card-deck'> 
      Mountain Index
      {mountList}
    </div>
  }
}

export default withRouter(MountainIndex)