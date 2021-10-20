import React from "react";

const SongList = (props) => {
  return (
    <div className="song-list">
      <Header />
      <Rows />
    </div>
  );
};

const Header = (props) => {
  return (
    <div className="flex-container">
      <div className="flex-item">Title</div>
      <div className="flex-item">Artist</div>
      <div className="flex-item">Genre</div>
      <div className="flex-item">Rating</div>
    </div>
  );
};

const Rows = (props) => {
  return (
    <div className="flex-container play-list">
      <div className="flex-item">{props.title}</div>
      <div className="flex-item">Artist</div>
      <div className="flex-item">Genre</div>
      <div className="flex-item">Rating</div>
    </div>
  );
};

export default SongList;
