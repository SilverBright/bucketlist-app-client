import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk' 
import appTransactions from './reducers/appTransactions';
// import currentIdea from './reducers/currentIdea';
// import ideaFormData from './reducers/ideaFormData';
import ideas from './reducers/ideas';
// import { composeWithDevTools } from 'redux-devtools-extension';

// combine all the reducers
const reducers = combineReducers({
  appTransactions,
  // currentIdea,
  // ideaFormData,
  ideas,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const middleware = [ReduxThunk];

// the store manages all of the state

// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(ReduxThunk)
//   )

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

export default store;
