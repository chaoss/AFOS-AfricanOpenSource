import ProjectCards from "./ProjectCards";
import image from "../assets/images/project-section-thumbnail.svg";
import search_icon from "../assets/images/Search.svg";
import dropdown_icon from "../assets/images/dropdown.svg";

function Projects() {
    return (
        <div className="bg-[#ffffe3] w-full p-5 py-10 md:p-20 lg:px-36 justify-center items-center">
            {/* Search */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4">
                <div className="relative flex bg-[#e1e1ca] w-48 md:w-80 p-4 gap-1 justify-center items-center rounded-lg">
                    <input
                        className=" text-gray-600 outline-none rounded-lg  w-full bg-[#e1e1ca] "
                        type="text"
                        placeholder="Search for products"></input>
                    <button className="">
                        <img src={search_icon} />
                    </button>
                </div>
                <div className="flex gap-2 md:gap-6 justify-center items-center border-2 border-black p-4 rounded-lg">
                    All Category
                    <div>
                        <img src={dropdown_icon} />
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-2 py-4 justify-center ">
                <ProjectCards
                    image={image}
                    description={"High Tech NC Speakers for wide range use"}
                    last_updated={"10 Dec, 2022"}
                    launched_date={"Nov 12"}
                    tag={"Finance"}
                    title={"Mojojo Speakers"}
                />
                <ProjectCards
                    image={image}
                    description={"High Tech NC Speakers for wide range use"}
                    last_updated={"10 Dec, 2022"}
                    launched_date={"Nov 12"}
                    tag={"Finance"}
                    title={"Mojojo Speakers"}
                />
                <ProjectCards
                    image={image}
                    description={"High Tech NC Speakers for wide range use"}
                    last_updated={"10 Dec, 2022"}
                    launched_date={"Nov 12"}
                    tag={"Finance"}
                    title={"Mojojo Speakers"}
                />
                <ProjectCards
                    image={image}
                    description={"High Tech NC Speakers for wide range use"}
                    last_updated={"10 Dec, 2022"}
                    launched_date={"Nov 12"}
                    tag={"Finance"}
                    title={"Mojojo Speakers"}
                />
                <ProjectCards
                    image={image}
                    description={"High Tech NC Speakers for wide range use"}
                    last_updated={"10 Dec, 2022"}
                    launched_date={"Nov 12"}
                    tag={"Finance"}
                    title={"Mojojo Speakers"}
                />
                <ProjectCards
                    image={image}
                    description={"High Tech NC Speakers for wide range use"}
                    last_updated={"10 Dec, 2022"}
                    launched_date={"Nov 12"}
                    tag={"Finance"}
                    title={"Mojojo Speakers"}
                />
            </div>
        </div>
    );
}

export default Projects;
