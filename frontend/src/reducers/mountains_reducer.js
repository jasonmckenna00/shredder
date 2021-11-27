import { GET_ALL_MOUNTAINS, GET_FAVORITE_MOUNTAINS, GET_MOUNTAIN } from "../actions/mountain_actions"

const currState = {index:{}, favoriteMountains: {}}
const mountainReducer = function( state = currState, action) {
  Object.freeze(state)
  switch(action.type){
    case GET_ALL_MOUNTAINS:
      return Object.assign( {}, state, {index: action.payload})
    case GET_MOUNTAIN:
      return Object.assign( {}, state, {[action.payload.mountain.id]: action.payload.mountain})
    case GET_FAVORITE_MOUNTAINS:
      return Object.assign( {}, state, {favoriteMountains: action.payload})
    default: return state;
  }
}

export default mountainReducer
