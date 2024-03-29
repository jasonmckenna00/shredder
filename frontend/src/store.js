import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]
const initialState = {}
const store = createStore(
  rootReducer,  
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
  
  )
  // devTools: process.env.NODE_ENV !== 'production',
export default store;