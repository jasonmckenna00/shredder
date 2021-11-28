import { connect } from 'react-redux'
// import MountainFavorites from './mountain_favorites'
import * as MountainActions from '../../actions/mountain_actions'
import MountainCard from './mountain_card'
const msp = (state) =>{
    // debugger
  return {
    favoriteMountains: state.mountains.favoriteMountains
  }
}

const mdp = dispatch => ({
  addFavoriteMountain: (mountainId) => dispatch(MountainActions.addFavoriteMountain(mountainId))
})

export default connect(msp,mdp)(MountainCard)

