import React from "react";

const SongList = (props) => {
  return (
    <div className="song-list">
      <table>
        <Header />
        <Rows />
      </table>
    </div>
  );
};

const Header = (props) => {
  return (
    <tr>
      <th>Title</th>
      <th>Artist</th>
      <th>Genre</th>
      <th>Rating</th>
    </tr>
  );
};

const Rows = (props) => {
  return (
    <div>
      <tr className="play-list">
        <th>Title</th>
        <th>Artist</th>
        <th>Genre</th>
        <th>Rating</th>
      </tr>
    </div>
  );
};

export default SongList;
