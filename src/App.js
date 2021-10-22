import React from "react";
import { useSelector } from "react-redux";
import InputForm from "./components/InputForm";
import SongList from "./components/SongList";

function App() {
  const song = useSelector((state) => state.song);

  console.log(song);

  return (
    <div className="app">
      <h1>WINC's Lil' Playlist</h1>
      <InputForm />
      <SongList />
    </div>
  );
}

export default App;
