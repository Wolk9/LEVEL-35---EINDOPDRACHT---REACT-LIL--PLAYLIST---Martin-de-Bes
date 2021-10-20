import React from "react";
import InputField from "./InputField";

const InputForm = (props) => {
  return (
    <div className="input-form flex-container">
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <div className="input-field flex-item">
        <button>new</button>
      </div>
    </div>
  );
};

export default InputForm;
