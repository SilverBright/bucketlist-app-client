import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk' 
import appTransactions from './reducers/appTransactions';
import ideas from './reducers/ideas';

// combine reducers
const reducers = combineReducers({
  appTransactions,
  ideas
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

export default store;
