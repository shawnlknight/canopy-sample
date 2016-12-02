import reducer from './comments';
import * as types from '../constants/actionTypes';

// duplicate initial state as defined in reducer because it includes mock data
const initialState = {
  1: {
    author: "Travis N",
    body: "I finished all the work in your yard. It was a pleasure serving you!",
    id: 1,
    type: "tech",
  },
  2: {
    author: "Barry",
    body: "I thought you we're going to trim the trees. I am displeased.",
    id: 2,
    type: "customer",
  },
  3: {
    author: "Travis N",
    body: "Wat!?",
    id: 3,
    type: "tech",
  }
};

describe('comments reducer', () => {
  it('should return the initial state', () => {
    const prevState = undefined;
    const action = {};

    expect(reducer(prevState, action)).toEqual(initialState);
  });

  it('should handle DELETE_COMMENT', () => {
    const prevState = initialState;
    const action = {
      itemId: 1,
      type: types.DELETE_COMMENT,
    };
    const nextState = {
      2: {
        author: "Barry",
        body: "I thought you we're going to trim the trees. I am displeased.",
        id: 2,
        type: "customer",
      },
      3: {
        author: "Travis N",
        body: "Wat!?",
        id: 3,
        type: "tech",
      }
    };

    expect(reducer(prevState, action)).toEqual(nextState);
  });
});
