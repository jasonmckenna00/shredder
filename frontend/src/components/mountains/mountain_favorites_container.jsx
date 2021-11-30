import { connect } from 'react-redux'
import MountainFavorites from './mountain_favorites'
import * as MountainActions from '../../actions/mountain_actions'
const msp = (state) =>{
  return {
    mountains: Object.values(state.mountains),
    favoriteMountains: Object.values(state.favoriteMountains)
  
  }
}

const mdp = dispatch => ({
  getFavoriteMountains: (mountainIds) => dispatch(MountainActions.getFavoriteMountains(mountainIds)),
  getAllMountains: () => dispatch(MountainActions.getAllMountains()),
  getMountain: () => dispatch(MountainActions.getMountain()),
})

const MountainFavoritesContainer = connect(msp,mdp)(MountainFavorites)
// const MountainFavoritesContainer = (MountainFavorites)


export default MountainFavoritesContainer