const songReducer = (
  state = [{ title: "", artist: "", genre: "", rating: 1 }],
  action
) => {
  switch (action.type) {
    case "TITLE":
      return state.title;
    case "ARTIST":
      return state.artist;
    case "GENRE":
      return state.genre;
    case "RATING":
      return state.rating;
    default:
      return state;
  }
};

export default songReducer;
