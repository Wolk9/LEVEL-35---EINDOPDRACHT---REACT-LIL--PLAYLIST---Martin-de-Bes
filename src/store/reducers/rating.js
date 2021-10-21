const ratingReducer = (state, action) => {
  switch (action.type) {
    case "RATING":
      console.log(action.payload);
      state = action.payload;
      return state;
    default:
      return (state = 1);
  }
};

export default ratingReducer;
