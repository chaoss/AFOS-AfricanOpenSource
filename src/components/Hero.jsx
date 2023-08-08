import React from "react";
import heroImage from "../assets/images/hero-image.png";

function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-50 to-lime-50 flex justify-center">
        <img src={heroImage} className="py-10 md:py-0" alt="map-vector" />
        <div className="absolute md:space-x-6 mt-[20rem] md:mt-[28rem] flex flex-col md:block">
          <button className="bg-white rounded-md px-6 py-2 shadow-md">Submit Project</button>
          <button className="bg-green rounded-md text-white px-12 mt-2 py-2 shadow-md">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
