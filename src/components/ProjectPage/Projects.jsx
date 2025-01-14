/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ProjectCards from "../ProjectCards";
import search_icon from "../../assets/images/Search.svg";
import { ListFilter } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

import FilterSortModal from "./FilterSortModal";
import { Cross2Icon } from "@radix-ui/react-icons";

const Projects = ({ data }) => {
  const [projectsData, setProjectsData] = useState(data);
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [pageNumber, setPageNumber] = useState(() => {
    // Initialize the page number using the value in local storage or default to 1
    const savedPageNumber = localStorage.getItem("currentPage");
    return savedPageNumber ? parseInt(savedPageNumber, 10) : 1;
  });
  const [totalPageNumber, setTotalPageNumber] = useState(undefined);
  const [selectedFields, setSelectedFields] = useState([]);

  useEffect(() => {
    setFilteredProjects(
      projectsData.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, projectsData]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getProjects = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/getProjects?page=${pageNumber}`
      );
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);

        setProjectsData(data.projects);
        setTotalPageNumber(data.totalPages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Retrieve the page number from local storage if available
    const savedPageNumber = localStorage.getItem("currentPage");
    console.log("Retrieved Page Number from Local Storage:", savedPageNumber);
    if (savedPageNumber) {
      setPageNumber(parseInt(savedPageNumber, 10));
    } else {
      console.log("No page number in Local Storage, defaulting to page 1.");
    }
  }, []);

  useEffect(() => {
    // Store the page number in local storage whenever it changes
    console.log("Saving Page Number to Local Storage:", pageNumber);
    localStorage.setItem("currentPage", pageNumber);
    getProjects();
  }, [pageNumber]);

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 5; // Number of pages to display at once

    const startPage = Math.max(2, pageNumber - 1);
    const endPage = Math.min(totalPageNumber - 1, pageNumber + 1);

    // Always show the first page
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          onClick={() => setPageNumber(1)}
          className={pageNumber === 1 ? "active bg-[#FFA000] text-white" : ""}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (startPage > 2) {
      pages.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Display the range of pages around the current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={() => setPageNumber(i)}
            className={pageNumber === i ? "active bg-[#FFA000] text-white" : ""}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (endPage < totalPageNumber - 1) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show the last page
    if (totalPageNumber > 1) {
      pages.push(
        <PaginationItem key={totalPageNumber}>
          <PaginationLink
            href="#"
            onClick={() => setPageNumber(totalPageNumber)}
            className={
              pageNumber === totalPageNumber
                ? "active bg-[#FFA000] text-white"
                : ""
            }
          >
            {totalPageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };
  const removeFilter = (filter) => {
    setSelectedFields((prevFields) =>
      prevFields.filter((item) => item !== filter)
    );
  };

  useEffect(() => {
    if (selectedFields.length !== 0) {
      setFilteredProjects(
        projectsData.filter((project) => {
          return (
            selectedFields.includes(project.category) ||
            selectedFields.includes(project.country)
          );
        })
      );
    } else {
      setFilteredProjects(projectsData);
    }
  }, [selectedFields]);
  return (
   <div className="bg-[#ffffe3] w-full p-5 py-10 md:p-20 lg:px-36 justify-center items-center">
      {/* title */}
      <div className="mb-8">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Browse projects
        </h1>
      </div>

      {/* Search */}
      <div className="flex flex-wrap justify-between items-center gap-2 md:gap-4">
        <div className="flex p-4 w-[170px] sm-[350px] md:w-[400px] justify-between gap-2 items-center rounded-lg border border-[#E1E1CA]">
          <button className="">
            <img src={search_icon} alt="search icon" />
          </button>
          <input
            className="text-xs sm:text-base text-gray-600 outline-none rounded-lg  w-full bg-transparent"
            type="text"
            placeholder="Search for projects"
            value={searchQuery}
            onChange={handleSearchChange} />
        </div>
        <FilterSortModal
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
          projectsData={projectsData}
          setFilteredProjects={setFilteredProjects} />
      </div>

      {/* Filters */}
      {selectedFields.length !== 0 && (
        <div className="mt-5 flex mb-8 items-center flex-wrap">
          {selectedFields.map((field, index) => (
            <div
              key={index}
              className="p-1 rounded-full max-lg:text-sm lg:py-3 lg:px-4 bg-[#FFD54F] mr-2 lg:rounded-lg text-[#323200] font-medium flex items-center justify-center"
            >
              <span>{field}</span>
              <div
                className="bg-[#323200] rounded-full ml-2 p-1 cursor-pointer"
                onClick={() => removeFilter(field)}
              >
                <Cross2Icon className=" h-2 w-2  lg:h-3 lg:w-3 text-[#FFD54F]" />
              </div>
            </div>
          ))}
          <hr className="h-[40px] w-[2px] bg-[#E1E1C9] mr-3 ml-1" />
          <div className="flex flex-col">
            <span className="text-[#838364] text-sm  ">Showing</span>{" "}
            <span>{filteredProjects.length} projects</span>
          </div>
        </div>
      )}

      <>
        {filteredProjects.length > 0 ? (
          <>
            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-4 justify-center ">
              {filteredProjects.map((project, index) => (
                <ProjectCards
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  project_link={project.link} />
              ))}
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="cursor-pointer"
                    onClick={() => setPageNumber((page) => Math.max(1, page - 1))} />
                </PaginationItem>
                {renderPagination()}
                <PaginationItem>
                  <PaginationNext
                    className="cursor-pointer"
                    onClick={() => setPageNumber((page) => Math.min(totalPageNumber, page + 1)
                    )} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        ) : (
          <p className="text-center mt-10 md:text-lg text-zinc-500">
            No projects found. Try a different search term.
          </p>
        )}
      </>
 
    <div className="flex gap-2 justify-center items-center border border-[#E1E1CA] p-4 rounded-lg">
        <div>
          <ListFilter />
        </div>
        <p className="font-medium text-base">Filter</p>
      </div>
     
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-4 justify-center ">
        {projectsData.map((project, index) => (
          <ProjectCards
            key={project.id}
            image={project.logoimagelink + "?random=" + index + 1}
            title={project.title}
            category={project.category}
            description={project.description}
            project_link={project.link} />
        ))}
      </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => setPageNumber((page) => Math.max(1, page - 1))} />
            </PaginationItem>
            {renderPagination()}
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => setPageNumber((page) => Math.min(totalPageNumber, page + 1))} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div> 
  );

};


export default Projects;
