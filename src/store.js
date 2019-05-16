import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk' 
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


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducers,
//   composeEnhancer(applyMiddleware(ReduxThunk)),
// );



// const middleware = [ReduxThunk];

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
  )

export default store;
