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
export const editRating = (e) => {
  return {
    type: "RATING",
    payload: e
  };
};

export const editSong = (e) => {
  return {
    type: "SONG",
    payload: e
  };
};
