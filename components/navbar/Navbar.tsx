import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow-[0px_0px_12px_0px_#1026490F] h-20 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image src="/images/logo.png" alt="KoinX" height="72" width={96} />
        </div>

        <div className="flex gap-16 items-center justify-center">
          <ul className="flex gap-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
