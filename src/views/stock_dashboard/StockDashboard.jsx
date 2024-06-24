import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";
import TimCard from "../../component/Dashboard/TimCard.jsx";

import {
  getTimRequest,
  getSearchTimRequest,
  getExportPengerjaan,
} from "../../features/Stock.jsx";
import { debounce } from "../../component/debounce/Debounce.jsx";
import ChartComponent from "../../component/Chart/ChartComponent.jsx";

const StockDashboard = () => {
  const [tim, setTim] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const responseTim = await getTimRequest();

      setTim(responseTim.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchTim = async (query) => {
    try {
      const responseTim = await getSearchTimRequest(query);
      setTim(responseTim.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const exportPengerjaan = async () => {
    try {
      const response = await getExportPengerjaan();
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    getSearchTim(query);
  }, 1500);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Data Stock" />
        <div className="w-1/2 p-12">
          <ChartComponent />
        </div>
        <div className="p-12 flex flex-col">
          <div className="flex justify-between ">
            <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
              <input
                type="text"
                placeholder={`Cari tim ...`}
                className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                onChange={handleSearchInputChange}
                value={searchQuery}
              />
              <FaSearch className="my-auto mx-4  text-darkgrey" />
            </div>
            <button
              className="bg-yellow  h-10  px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
              onClick={exportPengerjaan}
            >
              Export Lapor Pengerjaan
            </button>
          </div>
          <div className="my-6 mt-8 w-full">
            <div className="flex flex-row overflow-x-auto scroll-smooth scroll whitespace-nowrap max-w-7xl scrollbar-thin scrollbar-track-white scrollbar-thumb-grey">
              {tim.map((team, index) => (
                <TimCard
                  key={index}
                  name={team.name}
                  id={team.id}
                  sa={team.sa}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
