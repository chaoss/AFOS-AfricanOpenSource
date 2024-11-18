import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ListFilter } from "lucide-react";
import search_icon from "../../assets/images/Search.svg";
import * as Tabs from "@radix-ui/react-tabs";
import { categories, countries } from "../../../mockData";
import { Cross2Icon } from "@radix-ui/react-icons";

const FilterSortModal = ({ selectedFields, setSelectedFields }) => {
  const [activeTab, setActiveTab] = useState("category");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (activeTab === "category") {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else if (activeTab === "country") {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, countries, categories, activeTab]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSelectField = (e) => {
    const { checked, id } = e.target;
    setSelectedFields((prevFields) =>
      checked ? [...prevFields, id] : prevFields.filter((field) => field !== id)
    );
  };

  // Helper function to determine if a field is selected
  const isFieldSelected = (field) => selectedFields.includes(field);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex gap-2 justify-center cursor-pointer items-center border border-[#E1E1CA] p-4 rounded-lg">
          <ListFilter />
          <p className="font-medium text-base">Filter</p>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent bg-[#ffffe3] border-[#FFF2C8] border-[1px] rounded-2xl w-[90%] sm:w-[70%] lg:w-[45%]">
          <Dialog.Title className="DialogTitle" />
          <Dialog.Close asChild>
            <div className="flex justify-end">
              <button
                className="IconButton mb-4"
                aria-label="Close"
                onClick={() => setActiveTab("category")}
              >
                <Cross2Icon className="w-6 h-6" />
              </button>
            </div>
          </Dialog.Close>
          <div className="flex p-4 justify-between gap-2 items-center rounded-lg border border-[#E1E1CA]">
            <button className="">
              <img src={search_icon} alt="search icon" />
            </button>
            <input
              className="text-base text-gray-600 outline-none rounded-lg w-full bg-transparent"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={`Search for ${
                activeTab === "category" ? "Category" : "Country"
              }`}
            />
          </div>
          <Dialog.Description className="DialogDescription" />
          <div className="mt-6">
            <Tabs.Root
              defaultValue="tab1"
              className="flex flex-col md:flex-row md:justify-between"
            >
              <Tabs.List className="flex md:flex-col max-md:border-b-[1px] max-md:border-b-[#D7D7D5]">
                <Tabs.Trigger
                  value="tab1"
                  className={`${
                    activeTab === "category" &&
                    "max-md:text-[#474744] max-md:border-b-2 max-md:border-b-[#474744] md:bg-[#FFF2C8]"
                  } max-md:h-[28px] text-[#D7D7D5] font-bold md:font-normal md:px-8 md:py-4 md:rounded-2xl md:text-[#474744]`}
                  onClick={() => setActiveTab("category")}
                >
                  Category
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab2"
                  className={`${
                    activeTab === "country" &&
                    "max-md:text-[#474744] max-md:border-b-2 max-md:border-b-[#474744] md:bg-[#FFF2C8]"
                  } max-md:ml-6 max-md:h-[28px] text-[#D7D7D5] font-bold md:font-normal md:px-8 md:py-4 md:rounded-2xl md:text-[#474744]`}
                  onClick={() => setActiveTab("country")}
                >
                  Country
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1" className="mt-8 md:w-[60%]">
                <ScrollComponent>
                  {filteredCategories.map((category, index) => (
                    <div
                      key={index}
                      className="p-4 flex justify-between hover:bg-[#FFF2C8]"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={category.name}
                          className="w-[20px] h-[20px] tab-input rounded-lg"
                          onChange={(e) => onSelectField(e)}
                          checked={isFieldSelected(category.name)}
                        />
                        <span className="text-[#474744] ml-2">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-[#777774]">{category.count}</span>
                    </div>
                  ))}
                </ScrollComponent>
              </Tabs.Content>
              <Tabs.Content value="tab2" className="mt-8 md:w-[60%]">
                <ScrollComponent>
                  {filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className="p-4 flex justify-between hover:bg-[#FFF2C8]"
                    >
                      <div className="flex items-center">
                        <input
                          id={country.name}
                          type="checkbox"
                          onChange={(e) => onSelectField(e)}
                          checked={isFieldSelected(country.name)}
                          className="w-[20px] h-[20px] tab-input rounded-lg"
                        />
                        <span className="text-[#474744] ml-2">
                          {country.name}
                        </span>
                      </div>
                      <span className="text-[#777774]">{country.count}</span>
                    </div>
                  ))}
                </ScrollComponent>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FilterSortModal;

export const ScrollComponent = ({ children }) => {
  return (
    <ScrollArea.Root className="ScrollAreaRoot w-full rounded-lg h-[320px]">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};
