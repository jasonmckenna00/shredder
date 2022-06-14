import {connect} from 'react-redux'
import MountainMap from './mountain_map'

const msp = (state) => {
    return {
        mountains: Object.values(state.mountains)
    }
}

const mdp = dispatch => ({

})

export default connect(msp,mdp)(MountainMap)