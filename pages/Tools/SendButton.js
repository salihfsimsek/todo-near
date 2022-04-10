import React from "react";

const SendButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-10 px-5 rounded-md border-2 ml-4 bg-black text-white hover:bg-gray-900 hover:border-black"
    >
      Save
    </button>
  );
};

export default SendButton;
