import { combineReducers } from 'redux';
import home from './homeReducer';
import app from './appReducer';

const rootReducer = combineReducers({
  home,
  app
});

export default rootReducer;