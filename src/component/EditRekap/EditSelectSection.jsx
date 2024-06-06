import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckBox.jsx";
import { FaSearch } from "react-icons/fa";
import { debounce } from "../../component/debounce/Debounce.jsx";

const EditSelectSection = ({ isOpen, name, data, setData, handleSearch }) => {
  if (!isOpen) return null;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    handleSearch(query);
  }, 1500);

  return (
    <div className="flex flex-col justify-between w-1/3">
      <div className="text-gray-600 text-xl font-normal font-['Poppins'] leading-7 ">
        {name}
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-full my-8">
          <input
            type="text"
            placeholder={`Cari ${name.toLowerCase()} ...`}
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
            onChange={handleSearchInputChange}
            value={searchQuery}
          />
          <FaSearch className="my-auto mx-4 text-darkgrey cursor-pointer" />
        </div>
        <div className="w-full flex flex-col gap-4 mt-4 max-h-[450px] overflow-y-auto overflow-x-hidden">
          {data.map((item, index) => (
            <CustomCheckbox label={item.name} key={index} />
          ))}
        </div>
      </div>

      <div className="">
        <button className="font-poppins bg-bluegrey rounded-lg text-sm text-white px-4 py-3">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EditSelectSection;
