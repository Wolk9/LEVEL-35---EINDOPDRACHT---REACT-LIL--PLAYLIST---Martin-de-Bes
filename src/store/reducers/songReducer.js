import { ADD_SONG } from "../types/songTypes";

const initialState = [
  {
    id: 0,
    title: "",
    artist: "",
    genre: "",
    rating: 1
  }
];
const songReducer = (state = initialState, action) => {
  console.log("songReducer", state, action);
  switch (action.type) {
    case ADD_SONG:
      console.log("action songReducer case SONG");
      return [...state], action.payload;
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
