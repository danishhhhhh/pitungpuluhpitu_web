import React from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Dashboard from "../../component/Dashboard/Dashboard";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";
import Cardtim from "../../component/Dashboard/Cardtim.jsx";
import Cardrekap from "../../component/Dashboard/cardrekap.jsx";
const StockdashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Data Stock" />
        <div className="p-12 flex flex-row">
          <div>
            <div className="flex justify-between ">
              <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
                <input
                  type="text"
                  placeholder="Cari sparepart ..."
                  className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                />
                <FaSearch className="my-auto mx-4  text-darkgrey" />
              </div>
              <button className="bg-yellow  h-10  px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm ">
                Export Lapor Pengerjaan
              </button>
            </div>
            <div className="my-6 flex justify-start">
              <Cardtim tim="Tim 1" />
              <Cardtim tim="Tim 2" />
              <Cardtim tim="Tim 3" />
              <Cardtim tim="Tim 4" />
              <Cardtim tim="Tim 5" />
            </div>
            <div className="mt-20">
            <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
                <input
                  type="text"
                  placeholder="Cari sparepart ..."
                  className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                />
                <FaSearch className="my-auto mx-4  text-darkgrey" />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-8">
              <Cardrekap />
              <Cardrekap />
              <Cardrekap />
              <Cardrekap />
              <Cardrekap />
              <Cardrekap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockdashboardPage;
