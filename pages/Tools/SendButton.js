import React from "react";

import LoadingSpinner from "../Tools/LoadingSpinner";

const SendButton = ({ onClick, loading }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-10 px-5 rounded-md border-2 ml-4 bg-black text-white hover:bg-gray-900 hover:border-black"
    >
      {loading ? <LoadingSpinner /> : "Save"}
    </button>
  );
};

export default SendButton;
