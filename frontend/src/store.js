import { createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware = [thunk]
// const initialState = {}
// const store = createStore(
//   rootReducer,  
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware)))

const rootReducer = combineReducers({
  mountains: mountainReducer,
  favoriteMountains: favoriteMountainReducer
})

const store = configureStore({
  reducer:{
    rootReducer
  }
})



export default store;