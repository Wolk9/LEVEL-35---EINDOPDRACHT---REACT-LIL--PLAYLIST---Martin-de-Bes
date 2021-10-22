const songReducer = (
  state = [
    {
      id: 0,
      title: "",
      artist: "",
      genre: "",
      rating: 1
    }
  ],
  action
) => {
  console.log("songReducer", state, action);
  switch (action.type) {
    case "SONG":
      console.log("action songReducer case SONG");
      return action.payload;
    default:
      console.log("action songReducer case default");
      return state;
  }
};

// switch (action.type) {
//   case "TITLE":
//     return state.title;
//   case "ARTIST":
//     return state.artist;
//   case "GENRE":
//     return state.genre;
//   case "RATING":
//     console.log(...state, state.rating);
//     return state.rating;
//   default:
//     return state;
export default songReducer;
