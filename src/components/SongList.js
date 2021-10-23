import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const SongList = (props) => {
  return (
    <div className="song-list">
      <Header />
      <Rows />
    </div>
  );
};

const Record = (record) => {
  return (
    <div className="flex-container play-list">
      <div className="flex-item">titel: {record.title}</div>
      <div className="flex-item">artiest: {record.artist}</div>
      <div className="flex-item">genre: {record.genre}</div>
      <div className="flex-item">rating: {record.rating}</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex-container">
      <div className="flex-item">Title</div>
      <div className="flex-item">Artist</div>
      <div className="flex-item">Genre</div>
      <div className="flex-item">Rating</div>
    </div>
  );
};

const Rows = () => {
  const record = useSelector((state) => state.song);
  console.log(record);
  const recordList = record.map((record) => (
    <Record key={record.id} record={record} />
  ));

  return <div>{recordList}</div>;
};

const mapStateToProps = (state) => {
  return { song: state.song };
};

const mapDispatchToProp = (dispatch) => {
  return { addSong: () => dispatch() };
};

export default connect(mapStateToProps, mapDispatchToProp)(SongList);
