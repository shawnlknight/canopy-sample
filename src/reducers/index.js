import { combineReducers } from 'redux';
import comments from './comments';
import scheduledItems from './scheduledItems';

const rootReducer = combineReducers({
  comments,
  scheduledItems,
});

export default rootReducer;
