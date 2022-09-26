import { combineReducers } from 'redux'
import {mountainReducer, favoriteMountainReducer, searchMountainsReducer} from './mountains_reducer'

const rootReducer = combineReducers({
  mountains: mountainReducer,
  favoriteMountains: favoriteMountainReducer,
  searchMountains: searchMountainsReducer
})

export default rootReducer