import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk' 
import appTransactions from './reducers/appTransactions';
import currentIdea from './reducers/currentIdea';
import ideaFormData from './reducers/ideaFormData';
import ideas from './reducers/ideas';

// combine all the reducers
const reducers = combineReducers({
  appTransactions,
  currentIdea,
  ideaFormData,
  ideas,
})

// the store manages all of the state

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
  )

export default store;
