// Actions
export const editTitle = (e) => {
  return {
    type: "TITLE",
    payload: e
  };
};

export const editArtist = (e) => {
  return {
    type: "ARTIST",
    payload: e
  };
};

export const editGenre = (e) => {
  return {
    type: "GENRE",
    payload: e
  };
};

export const editRating = (value) => {
  return {
    type: "RATING",
    payload: value
  };
};

export const editSong = (e) => {
  return {
    type: "SONG",
    payload: e
  };
};

export const updateInput = (key, input) => ({
  type: "UPDATE_INPUT",
  payload: { key, input }
});
