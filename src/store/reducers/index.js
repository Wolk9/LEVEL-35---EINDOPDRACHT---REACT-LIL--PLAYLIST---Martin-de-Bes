// Reducers
import { combineReducers } from "redux";
import genreReducer from "./genre";
import ratingReducer from "./rating";
import artistReducer from "./artist";
import titleReducer from "./title";
import songReducer from "./song";

const allReducers = combineReducers({
  rating: ratingReducer,
  genre: genreReducer,
  artist: artistReducer,
  title: titleReducer,
  song: songReducer
});

export default allReducers;
