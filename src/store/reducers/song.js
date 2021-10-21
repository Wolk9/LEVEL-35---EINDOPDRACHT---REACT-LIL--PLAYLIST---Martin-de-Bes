const songReducer = (
  state = [
    {
      id: 10839247817,
      title: "Cream",
      artist: "Prince",
      genre: "Pop",
      rating: 4
    }
  ],
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
      console.log(...state, state.rating);
      return state.rating;
    default:
      return state;
  }
};

export default songReducer;
