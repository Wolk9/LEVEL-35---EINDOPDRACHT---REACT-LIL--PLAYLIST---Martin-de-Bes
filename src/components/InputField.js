import React, { useState } from "react";

const InputField = (props) => {
  const [inputValues, setInputValues] = useState({});

  const handleOnChange = (event) => {
    setInputValues(event.target.value);
  };

  return (
    <div className="input-field flex-item">
      <form>
        <label for={props.label}>{props.label}</label>
        <input
          onChange={handleOnChange}
          id={props.label}
          name={props.label}
          type={props.type}
          value={inputValues}
        ></input>
      </form>
    </div>
  );
};

export default InputField;
