import { combineReducers } from 'redux';
import newtask from './newtask';
import todo from './todo';

export default combineReducers({
  newtask,
  todo,
});
