import { connect } from 'react-redux'
import MountainIndex from './mountain_index'
import * as MountainActions from '../../actions/mountain_actions'
const msp = (state) =>{
  return {mountains: Object.values(state.mountains)}
}

const mdp = dispatch => ({
  getAllMountains: () => dispatch(MountainActions.getAllMountains())
})

const MountainIndexContainer = connect(msp,mdp)(MountainIndex)
// const MountainIndexContainer = (MountainIndex)


export default MountainIndexContainer