import React from "react";

const MobileNav = () => {
  return (
    <div className="flex flex-col lg:hidden bg-textarea z-50 fixed top-20 left-0 w-full h-[calc(100vh-80px)] items-center justify-around p-4">
      <ul className="flex gap-8 flex-col items-center flex-1 justify-around">
        <li className="text-black text-base font-semibold cursor-pointer">
          Features
        </li>
        <li className="text-black text-base font-semibold cursor-pointer">
          Exchanges
        </li>
        <li className="text-black text-base font-semibold cursor-pointer">
          How it Works?
        </li>
        <li className="text-black text-base font-semibold cursor-pointer">
          Blog
        </li>
        <li className="text-black text-base font-semibold cursor-pointer">
          About us
        </li>
      </ul>
      <button className="w-28 border-blue border-2 text-blue rounded p-2 text-base font-semibold">
        Sign In
      </button>
    </div>
  );
};

export default MobileNav;
