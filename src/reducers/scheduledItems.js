import omit from 'lodash/omit';
import * as actionType from '../constants/actionTypes';

const initialState = {
  1: {
    completed: true,
    id: 1,
    name: "Lawn Mowing",
  },
  2: {
    completed: false,
    id: 2,
    name: "Tree Trimming",
  }
};

const mergedArgs = (state, itemId, args) => {
  const prev = state[itemId] || {};

  return { ...prev, ...args };
};


const scheduledItems = (state = initialState, action) => {
  switch (action.type) {
  case actionType.UPDATE_SCHEDULED_ITEM:
    return {
        ...omit(state, action.itemId),
      [action.itemId]: mergedArgs(state, action.itemId, action.args),
    };
  default:
    return state;
  }
};

export default scheduledItems;
