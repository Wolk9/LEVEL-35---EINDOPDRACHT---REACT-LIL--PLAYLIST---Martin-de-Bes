import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../store/actions";
// import InputField from "./InputField";
// import RatingField from "./RatingField";

const InputForm = (props) => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [artistValue, setAristValue] = useState("");
  const [genreValue, setGenreValue] = useState("pop");
  const [ratingValue, setRatingValue] = useState(1);

  const handleOnChange = (event) => {
    console.log(event.target.id);
    switch (event.target.id) {
      case "title":
        setTitleValue(event.target.value);
        break;
      case "artist":
        setAristValue(event.target.value);
        break;
      case "genre":
        console.log("case genre");
        setGenreValue(event.target.value);
        break;
      case "rating":
        console.log("case rating");
        setRatingValue(event.target.value);
        break;
      default:
        console.log("case default");
    }
  };

  const handleOnSubmit = (event) => {
    switch (event.target.id) {
      case "disabled":
        console.log("cancel");
        alert("Je moet ook een titel of een artiest invullen");
        break;
      default:
        let timestamp = new Date().getTime() * Math.random();
        console.log(
          timestamp,
          artistValue,
          titleValue,
          genreValue,
          ratingValue
        );
        addSong({
          id: timestamp,
          title: titleValue,
          artist: artistValue,
          genre: genreValue,
          rating: ratingValue
        });
    }
  };

  console.log(titleValue, artistValue, genreValue, ratingValue);
  let button;
  if (titleValue === "" || artistValue === "") {
    button = (
      <button
        id="disabled"
        onClick={handleOnSubmit}
        type="cancel"
        className="addButton disabled"
      >
        +
      </button>
    );
  } else {
    button = (
      <button
        id="enabled"
        onClick={handleOnSubmit}
        className="addButton"
        type="submit"
      >
        +
      </button>
    );
  }

  return (
    <div className="input-form flex-container">
      <form>
        <label for="title">Title</label>
        <input
          onChange={handleOnChange}
          id="title"
          name="title"
          type="text"
          value={titleValue}
        ></input>
      </form>
      <form>
        <label for="artist">Artist</label>
        <input
          onChange={handleOnChange}
          id="artist"
          name="artist"
          type="text"
          value={artistValue}
        ></input>
      </form>
      <form>
        <label for="genre">Genre</label>
        <select
          onChange={handleOnChange}
          id="genre"
          name="genre"
          type="text"
          value={genreValue}
        >
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="funk">Funk</option>
          <option value="disco">Disco</option>
          <option value="jazz">Jazz</option>
        </select>
      </form>
      <form>
        <label for="rating">Rating</label>
        <select
          onChange={handleOnChange}
          id="rating"
          name="rating"
          type="text"
          value={ratingValue}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
      <div className="input-field flex-item">{button}</div>
    </div>
  );
};

export default InputForm;
