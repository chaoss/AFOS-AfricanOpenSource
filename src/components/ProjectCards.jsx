function ProjectCards({ image, title, description, project_link, category }) {
  return (
    <div className="w-full py-7 md:py-10 px-5 rounded-xl border-[1px] border-[#ecea8a] bg-[#ffffe3]">
      {/* Project Logo */}
      <div className="h-36 flex justify-center items-center bg-[#f6f3c3] border-[1px] border-[#E6E76D] rounded-xl overflow-hidden">
        <img className=" rounded-t-xl" src={image} alt={title} />
      </div>

      {/* Card Content */}
      <div className="pt-6 h-52 overflow-hidden">
        {/* Category */}
        <div className="flex gap-2 items-center my-4">
          <div className="text-sm font-sans px-2 py-1 text-gray-600 font-medium bg-[#F1EEA6] rounded-md">
            Category - {category}
          </div>
        </div>

        {/* Description */}
        <div className="my-4">
          <div className="text-base text-gray-600 font-medium">
            {description.length < 200
              ? description
              : description.substring(0, 200) + "..."}
          </div>
        </div>
      </div>

      {/* View Project Button */}
      <a href={project_link} target="_blank" rel="noreferrer">
        <button className=" bg-[#323200] hover:bg-[#323200da] font-semibold text-[#ffffe3] w-full p-3 rounded-lg">
          View Project
        </button>
      </a>
    </div>
  );
}

export default ProjectCards;
