import github_image from "../assets/images/github-icon.svg";
import star from "../assets/images/review-star.svg";
import atlasin from "../assets/images/logos_atlassian.svg";
import calendar from "../assets/images/calendar.svg";

function ProjectCards({
    image,
    title,
    description,
    tag,
    launched_date,
    last_updated,
}) {
    return (
        <div className="w-full rounded-xl border-[1px] border-[#ecea8a] bg-[#ffffe3]">
            {/* Image */}
            <div className="relative ">
                <img className="w-full rounded-t-xl" src={image} alt={title} />
                <div className="absolute top-0 right-0">
                    <img className="rounded-tr-xl" src={star} alt="star" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Header */}
                <div className="relative flex justify-between items-center">
                    <img
                        className="bg-[#0052CC] p-2 border-white border-2 rounded-lg w-10 h-[40px]  !z-10"
                        src={atlasin}
                        alt="icon"
                    />
                    <img
                        className="w-10 h-10 absolute top-0 left-7 !-z-0"
                        src={github_image}
                        alt="icon"
                    />
                    <div className="bg-[#D1FFF7] rounded-full px-3 py-1 text-sm">
                        {tag}
                    </div>
                </div>

                {/* Body */}
                <div className="my-4">
                    <div className="text-xl font-semibold ">{title}</div>
                    <div className="text-sm text-gray-600 font-medium">
                        {description}
                    </div>
                </div>

                {/* Footer */}
                <div className="my-4">
                    <div className="flex gap-2 items-center">
                        {" "}
                        <img src={calendar} alt="calendar" /> Launched date:{" "}
                        {launched_date}
                    </div>
                    <div className="flex gap-1">
                        <div className="text-gray-600">Last updated:</div>{" "}
                        {last_updated}
                    </div>
                </div>

                {/* Button */}
                <button className=" bg-[#323200] hover:bg-[#323200da] font-semibold text-[#ffffe3] w-full p-3 rounded-lg">
                    See More
                </button>
            </div>
        </div>
    );
}

export default ProjectCards;
