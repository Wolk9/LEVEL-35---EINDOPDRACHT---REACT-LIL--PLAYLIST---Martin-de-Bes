const ratingReducer = (state = 1, action) => {
  switch (action.type) {
    case "TWO-STARS":
      return state + action.payload;
    case "THREE-STARS":
      return state + action.payload;
    case "FOUR-STARS":
      return state + action.payload;
    default:
      return (state = 1);
  }
};

export default ratingReducer;
