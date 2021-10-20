import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import InputForm from "./components/InputForm";
import SongList from "./components/SongList";

function App() {
  const song = useSelector((state) => state.song);
  const title = useSelector((state) => state.title);
  const artist = useSelector((state) => state.artist);
  const genre = useSelector((state) => state.genre);
  const rating = useSelector((state) => state.rating);

  return (
    <div className="App">
      <h1>WINC's Lil' Playlist</h1>
      <InputForm />
      <SongList />
    </div>
  );
}

export default App;
