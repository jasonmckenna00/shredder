import { ADD_FAVORITE_MOUNTAIN, GET_ALL_MOUNTAINS, GET_FAVORITE_MOUNTAINS } from "../actions/mountain_actions"

const currState = {index:[], favoriteMountains: []}
const mountainReducer = function( state = currState, action) {
  Object.freeze(state)
  switch(action.type){
    case GET_ALL_MOUNTAINS:
      return Object.assign( {}, state, {index: action.payload})
    // case GET_MOUNTAIN:
    //   return Object.assign( {}, state, {[action.payload.mountain.id]: action.payload.mountain})
    case GET_FAVORITE_MOUNTAINS:
      return {...state, favoriteMountains: action.payload}
    case ADD_FAVORITE_MOUNTAIN:
      return {...state, favoriteMountains: state.favoriteMountains.concat(action.payload)}
      // return Object.assign( {}, state, {favoriteMountains: {[action.payload.id]: action.payload}})
    default: return state;
  }
}


export default mountainReducer
