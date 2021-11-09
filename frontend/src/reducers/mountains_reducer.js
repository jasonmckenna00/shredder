import { GET_ALL_MOUNTAINS, GET_MOUNTAIN } from "../actions/mountain_actions"

const mountainReducer = function( state = {}, action) {
  Object.freeze(state)
  switch(action.type){
    case GET_ALL_MOUNTAINS:
      return Object.assign( {}, state, action.payload)
    case GET_MOUNTAIN:
      return Object.assign( {}, state, {[action.payload.mountain]: action.payload.mountain})
    default: return state;
  }
}

export default mountainReducer
