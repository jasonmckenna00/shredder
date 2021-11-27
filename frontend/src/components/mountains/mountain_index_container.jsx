import { connect } from 'react-redux'
import * as MountainActions from '../../actions/mountain_actions'
import MountainIndex from "../mountains/mountain_index"

const msp = (state) => {
	return{
		mountains: Object.values(state.mountains.index),
	}
}

const mdp = dispatch => ({
  getAllMountains: () => dispatch(MountainActions.getAllMountains()),
})
const MountainIndexContainer = connect(msp,mdp)(MountainIndex)
export default MountainIndexContainer
