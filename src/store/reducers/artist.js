const artistReducer = (state = "", action) => {
  console.log("artistReducer", state, action);
  switch (action.type) {
    case "GET":
      return state;
    case "CREATE":
      return state;
    default:
      return state;
  }
};

export default artistReducer;
