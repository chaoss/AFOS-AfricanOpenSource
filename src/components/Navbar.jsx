/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/images/afos-logo.svg";

function Navbar() {
  const [NavOpen, setNavOpen] = useState(false);
  return (
    <div className="flex justify-between md:w-full p-5 md:px-32 text-green">
      <img src={logo} alt="logo" className="w-20 h-10" />
      <nav>
        <section className="MOBILE-MENU md:hidden">
          <div>
            <button className="md:hidden mt-2 material-symbols-outlined">
              menu
            </button>
          </div>
          <div>
            <span class="absolute top-0 right-0 px-7 py-7 material-symbols-outlined">
              close
            </span>
          </div>
          <div className="">
            <ul className="Responsive-mobile-menu">
              <li>
                <a href="#" className="px-4 py-2 mr-4">
                  About Afos
                </a>
              </li>
              <li className="">
                <a href="#" className="px-4 py-4 mr-4">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="px-4 py-2 mr-4">
                  Community
                </a>
              </li>
              <button className="bg-yellow rounded-md px-6 py-4 font-semibold">
                Submit Project
              </button>
            </ul>
          </div>
        </section>
      </nav>

      <div className="hidden md:flex list-none items-center">
        <li>
          <a href="#" className="px-4 py-2 mr-4">
            About Afos
          </a>
        </li>
        <li className="">
          <a href="#" className="px-4 py-4 mr-4">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 mr-4">
            Community
          </a>
        </li>
        <button className="bg-yellow rounded-md px-6 py-4 font-semibold">
          Submit Project
        </button>
      </div>
    </div>

    // <div className=" w-[396px] md:w-full p-5 md:p-10">
    //   <div className="flex justify-between">
    //     <img src={logo} alt="logo" className="w-20 h-10" />

    //     <nav>
    //       <section className="mobile-menu">
    //         <div
    //           className="hamburger-icon"
    //           onClick={() => setNavOpen((prev) => !prev)}
    //         >
    //           <button className="md:hidden material-symbols-outlined">menu</button>
    //         </div>
    //         <div className=""></div>

    //         <div className="hidden md:block flex-col text-green text-base">
    //           <button>
    //             <a className="px-4 py-2 mr-4">About Afos</a>
    //           </button>
    //           <button>
    //             <a href="#" className="px-4 py-2">
    //               Projects
    //             </a>
    //           </button>
    //           <button>
    //             <a href="#" className="px-4 py-2">
    //               Community
    //             </a>
    //           </button>
    //           <button className="bg-yellow rounded-md px-9 py-4 font-semibold">
    //             Submit Project
    //           </button>
    //         </div>
    //       </section>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Navbar;
