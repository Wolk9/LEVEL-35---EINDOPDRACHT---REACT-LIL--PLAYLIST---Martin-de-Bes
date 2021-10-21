import React from "react";
import { useDispatch } from "react-redux";
import { editRating } from "../store/actions";

const RatingField = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="input-field rating-label flex-item">
      <form>
        <label for={props.label}>{props.label}</label>
        {/* <input
          id={props.label}
          name={props.label}
          className="rating"
          max="5"
          oninput="this.style.setProperty('--value', this.value)"
          step="0.5"
          type={props.type}
          value="2.5"
        ></input> */}
        <button onClick={() => dispatch(editRating(1))}>1</button>
        <button onClick={() => dispatch(editRating(2))}>2</button>
        <button onClick={() => dispatch(editRating(3))}>3</button>
        <button onClick={() => dispatch(editRating(4))}>4</button>
        <button onClick={() => dispatch(editRating(5))}>5</button>
      </form>
    </div>
  );
};

export default RatingField;
