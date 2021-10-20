import React from "react";
import InputField from "./InputField";
import RatingField from "./RatingField";

const InputForm = (props) => {
  return (
    <div className="input-form flex-container">
      <InputField label="Title" type="text" />
      <InputField label="Artist" type="text" />
      <InputField label="Genre" type="list" />
      <RatingField label="Rating" type="range" />
      <div className="input-field flex-item">
        <button>new</button>
      </div>
    </div>
  );
};

export default InputForm;
