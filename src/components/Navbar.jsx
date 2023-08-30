/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/images/afos-logo.svg";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="flex justify-between md:w-full p-5 text-green bg-gradient-to-r from-orange-50 to-lime-50">
      <a href="#">
        <img src={logo} alt="logo" className="w-20 h-10" />
      </a>
      <nav>
        <section className="MOBILE-MENU md:hidden ">
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
            <div className={` ${navOpen ? "block" : "hidden"}`}>
              <div className="flex flex-col absolute text-green mt-5 z-10 items-center gap-12 py-6 w-1/2 left-[50%] h-screen bg-white Responsive-mobile-menu">
                <a href="#" className="hover:underline underline-offset-8 hover:text-zinc-500">
                  About Afos
                </a>
                <a href="#" className="hover:underline underline-offset-8 hover:text-zinc-500">
                  Projects
                </a>
                <a href="#" className="hover:underline underline-offset-8 hover:text-zinc-500">
                  Community
                </a>
                <button className="bg-yellow hover:bg-amber-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 rounded-md px-4 md:px-6 py-4 text-sm md:text-base font-semibold">
                  Submit Project
                </button>
              </div>
            </div>
          </div>
        </section>
      </nav>

      <div className="DESKTOP-MENU hidden md:flex list-none items-center  font-semibold">
        <li>
          <a href="#" className="px-4 py-2 mr-4 text-green hover:text-zinc-500">
            About Afos
          </a>
        </li>
        <li className="">
          <a href="#" className="px-4 py-4 mr-4 text-green hover:text-zinc-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 mr-4 text-green hover:text-zinc-500">
            Community
          </a>
        </li>
        <button className="bg-yellow hover:bg-amber-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md px-6 py-3 font-semibold">
          Submit Project
        </button>
      </div>
    </div>
  );
}

export default Navbar;
