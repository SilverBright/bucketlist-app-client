import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import appTransactions from './reducers/appTransactions';
import currentIdea from './reducers/currentIdea';
import ideaFormData from './reducers/ideaFormData';
import ideas from './reducers/ideas';

const reducers = combineReducers({
  appTransactions,
  currentIdea,
  ideaFormData,
  ideas,
})

const middleware = [ReduxThunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
  )
