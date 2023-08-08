/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/images/afos-logo.svg";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="flex justify-between md:w-full p-5 md:px-10 text-green bg-gradient-to-r from-orange-50 to-lime-50">
      <a href="#"><img src={logo} alt="logo" className="w-20 h-10 " /></a>
      <nav>
        <section className="MOBILE-MENU md:hidden">
          <div>
            <button
              className="md:hidden mt-2"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <span className="HAMBURGER-ICON absolute bg-white w-1/2 top-0 right-0 px-7 py-7 material-symbols-outlined">
                  close
                </span>
              ) : (
                <span className="CLOSE-ICON absolute top-0 right-0 px-7 py-7 material-symbols-outlined">
                  menu
                </span>
              )}
            </button>
            <div
              className={`${
                navOpen ? "block" : "hidden"
              }`}
            >
              <ul className="absolute mt-20 space-y-6 px-6 z-10 w-1/2 block top-0 right-0 h-screen  bg-white Responsive-mobile-menu">
                <li>
                  <a href="#" className="underline hover:underline-offset-4">
                    About Afos
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:underline-offset-4">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:underline-offset-4">
                    Community
                  </a>
                </li>
                <button className="bg-yellow hover:bg-amber-400 rounded-md px-4 md:px-6 py-4 text-sm md:text-base font-semibold">
                  Submit Project
                </button>
              </ul>
            </div>
          </div>
        </section>
      </nav>

      <div className="DESKTOP-MENU hidden md:flex list-none items-center ">
        <li>
          <a href="#" className="px-4 py-2 mr-4 hover:text-zinc-400">
            About Afos
          </a>
        </li>
        <li className="">
          <a href="#" className="px-4 py-4 mr-4 hover:text-zinc-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 mr-4 hover:text-zinc-400">
            Community
          </a>
        </li>
        <button className="bg-yellow hover:bg-amber-400 rounded-md px-6 py-4 font-semibold">
          Submit Project
        </button>
      </div>
    </div>
  );
}

export default Navbar;
