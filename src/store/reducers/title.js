const titleReducer = (state = "", action) => {
  console.log("titleReducer", state, action);
  switch (action.type) {
    case "UPDATE_INPUT":
      return action.payload;
    default:
      return state;
  }
};

export default titleReducer;

// dit is even een aanpassing
