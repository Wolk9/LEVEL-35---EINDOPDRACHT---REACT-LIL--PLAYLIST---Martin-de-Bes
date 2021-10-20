const songReducer = (state = " ", action) => {
  switch (action.type) {
    case "TITLE":
      return state;
    case "ARTIST":
      return state;
    case "GENRE":
      return state;
    case "RATING":
      return state;
    default:
      return state;
  }
};

export default songReducer;
