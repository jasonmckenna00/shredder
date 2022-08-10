import { ADD_FAVORITE_MOUNTAIN, 
  GET_ALL_MOUNTAINS, 
  GET_FAVORITE_MOUNTAINS, 
  REMOVE_FAVORITE_MOUNTAIN } from "../actions/mountain_actions"
import _ from "lodash";



export const mountainReducer = function( state = {}, action) {
  Object.freeze(state)
  switch(action.type){
    case GET_ALL_MOUNTAINS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    default: return state;
  }
}

export const favoriteMountainReducer = function (state = {}, action){
  Object.freeze(state)
  switch(action.type){
    case GET_FAVORITE_MOUNTAINS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case ADD_FAVORITE_MOUNTAIN:
      return {...state, [action.payload.id]: action.payload}
    case REMOVE_FAVORITE_MOUNTAIN:
      const {[action.payload]: omit, ...newState } = state
      // debugger
      return newState
    default: return state;
    
  }
}

