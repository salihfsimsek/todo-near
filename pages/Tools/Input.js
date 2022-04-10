import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="w-11/12 border-2 border-white outline-none px-3 text-lg rounded-md h-10 focus:border-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
