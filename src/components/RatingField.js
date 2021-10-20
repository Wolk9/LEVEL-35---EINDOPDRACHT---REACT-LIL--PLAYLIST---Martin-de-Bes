import React from "react";

const RatingField = (props) => {
  return (
    <div className="input-field rating-label flex-item">
      <form>
        <label for={props.label}>{props.label}</label>
        <input
          id={props.label}
          name={props.label}
          className="rating"
          max="5"
          oninput="this.style.setProperty('--value', this.value)"
          step="0.5"
          type={props.type}
          value="2.5"
        ></input>
      </form>
    </div>
  );
};

export default RatingField;
