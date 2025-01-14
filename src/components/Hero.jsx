import heroImage from "../assets/images/hero-image.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-[60vh] md:h-full bg-gradient-to-r from-orange-50 to-lime-50">
      <div className="flex justify-center">
        <img
          src={heroImage}
          className="object-cover md:py-0"
          alt="map-vector"
        />
        <div className="absolute md:space-x-6 mt-[60%] md:mt-[28rem] flex flex-col w-[50%] md:w-auto md:block">
          <button className="bg-white font-semibold rounded-md px-6 py-2 shadow-md">
            Submit Project
          </button>
          <button className="bg-[#323200] font-semibold rounded-md text-white px-12 mt-2 py-2 shadow-md">
            <Link
              to="/projects"
              className="underline-offset-8 hover:text-zinc-500"
            >
              Explore
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
