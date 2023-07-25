/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/images/afos-logo.svg";

function Navbar() {
  return (
    <div className="w-[396px] md:w-full py-6 px-16">
      <div className="flex justify-between">
        <div className="">
          <img src={logo} alt="logo" className="w-20 h-10" />
        </div>
        <div className="text-green text-base">
          <a
            href="#"
            className="px-4 py-2 mr-4"
          >
            About Afos
          </a>
          <a
            href="#"
            className="px-4 py-2"
          >
            Projects
          </a>
          <a
            href="#"
            className="px-4 py-2"
          >
            Community
          </a>
          <button className="bg-yellow rounded-md px-9 py-4 font-semibold">
            Submit Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
