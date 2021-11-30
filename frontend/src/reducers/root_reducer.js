import { combineReducers } from 'redux'
import {mountainReducer, favoriteMountainReducer} from './mountains_reducer'

const rootReducer = combineReducers({
  mountains: mountainReducer,
  favoriteMountains: favoriteMountainReducer
})

export default rootReducer