import ProjectCards from "./ProjectCards";
import search_icon from "../assets/images/Search.svg";
import dropdown_icon from "../assets/images/dropdown.svg";

import chakara from "../assets/images/Project Logos/chakra.png";
import chaoss from "../assets/images/Project Logos/chaoss.png";
import osca from "../assets/images/Project Logos/os.png";
import igboapi from "../assets/images/Project Logos/igboapi.png";
import spaceyatech from "../assets/images/Project Logos/spaceyatech.png";
import windui from "../assets/images/Project Logos/windui.png";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-4 justify-center ">
                <ProjectCards
                    image={chakara}
                    category="UI Library"
                    description={"Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications."}
                    project_link={"https://chakra-ui.com/ "}

                />
                <ProjectCards
                    image={chaoss}
                    category={"Community"}
                    description={"A chapter of the CHAOSS Project focusing on creating initiatives and metrics around solving challenges of Open Source Communities in Africa."}
                    project_link={"https://chaoss.community/"}
                />
                <ProjectCards
                    image={osca}
                    category={"Community"}
                    description={"A community of creative minds driving the Open Source movement in Africa."}
                    project_link={"https://oscafrica.org/"}

                />
                <ProjectCards
                    image={igboapi}
                    category={"API"}
                    description={"Access thousands of Igbo words, audio pronunciations, and example sentences to power the future of Igbo technology."}
                    project_link={"https://igboapi.com/"}

                />
                <ProjectCards
                    image={spaceyatech}
                    category={"Tech Community"}
                    description={"SpaceYaTech We are the fastest growing African Open-Source Community Looking To Change The Way Young Africans Get Started In Technology."}
                    project_link={"https://github.com/SpaceyaTech"}

                />
                <ProjectCards
                    image={windui}
                    category={"UI Library"}
                    description={"Beautiful and professionally crafted Windi UI components and templates."}
                    project_link={"https://github.com/selemondev/windi-ui"}

                />
            </div>
        </div>
    );
}

export default Projects;
