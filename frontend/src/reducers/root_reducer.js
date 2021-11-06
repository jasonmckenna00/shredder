import { combineReducers } from 'redux'
import mountains_reducer from './mountains_reducer'

const rootReducer = combineReducers({
  mountains: mountains_reducer
})

export default rootReducer