import { GET_ALL_MOUNTAINS, GET_MOUNTAIN } from "../actions/mountain_actions"

export default ( state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case GET_ALL_MOUNTAINS:
      return Object.assign( {}, state, action.payload)
    default: return state;
  }
}
