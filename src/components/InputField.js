import React from "react";

const InputField = (props) => {
  return (
    <div className="input-field flex-item">
      <form>
        <label for={props.label}>{props.label}</label>
        <input id={props.label} name={props.label} type={props.type}></input>
      </form>
    </div>
  );
};

export default InputField;
