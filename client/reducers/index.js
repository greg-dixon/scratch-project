import pkg from 'redux';
import mainReducer from './reducer.js';

const { combineReducers } = pkg;

const reducers = combineReducers({
  mainReducer,
});

export default reducers;
