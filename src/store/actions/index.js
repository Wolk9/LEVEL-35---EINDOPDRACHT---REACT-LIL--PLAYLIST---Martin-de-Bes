// Actions
import { ADD_SONG } from "../types/songTypes";

export const addSong = (value) => {
  console.log("addSong action", value);
  return {
    type: ADD_SONG,
    payload: value
  };
};
