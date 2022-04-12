import React from "react";

import { signIn } from "../../near/config";

const Header = () => {
  return (
    <div className="h-16 w-screen border-b-2 border-red-100 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <span className="text-xl cursor-default select-none">Todo App</span>
        {/* <span className='text-xl cursor-default select-none'>Near Protocol</span> */}
        <button
          onClick={signIn}
          className="border-2 rounded-md border-black px-4 py-1 hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-red-900"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
