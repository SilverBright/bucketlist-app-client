import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk' 
import ideas from './reducers/ideas';

// combine all reducers here
const reducer = combineReducers({
  // future reducers
  ideas
});
console.log("Loaded the store from store.js")

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
