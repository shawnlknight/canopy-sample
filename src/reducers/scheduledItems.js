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


const scheduledItems = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default scheduledItems;
