import { combineReducers } from 'redux';
import scheduledItems from './scheduledItems';

const rootReducer = combineReducers({
  scheduledItems,
});

export default rootReducer;
