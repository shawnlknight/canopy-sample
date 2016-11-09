import reducer from './scheduledItems';
import * as types from '../constants/actionTypes';

// because we have mock data as part of our initial state, defined in the
// reducer, duplicating here for testing purposes
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

describe('scheduled items reducer', () => {
  it('should return the initial state', () => {
    const prevState = undefined;
    const action = {};

    expect(reducer(prevState, action)).toEqual(initialState);
  });

  it('should handle UPDATE_SCHEDULED_ITEM', () => {
    const prevState = initialState;
    const action = {
      args: { completed: false },
      itemId: 1,
      type: types.UPDATE_SCHEDULED_ITEM,
    };
    const nextState = {
      1: {
        completed: false,
        id: 1,
        name: "Lawn Mowing",
      },
      2: {
        completed: false,
        id: 2,
        name: "Tree Trimming",
      },
    };

    expect(reducer(prevState, action)).toEqual(nextState);
  });
});
