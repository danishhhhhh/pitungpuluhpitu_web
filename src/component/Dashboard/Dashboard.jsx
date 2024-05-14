import React from "react";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";

import Cardrekap from "./cardrekap";
import Cardtim from "./Cardtim";

const Dashboard = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20 ">
      <div className="flex justify-between ">
        <div className="left-0 flex justify-start bg-lightgrey rounded-xl w-80 ">
          <input
            type="text"
            placeholder="Cari sparepart ..."
            className=" w-80 h-9 md:pl-2  bg-lightgrey rounded-xl text-darkgrey focus:outline-none font-poppins text-sm"
          />
          <FaSearch className="text-darkgrey m-2" />
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
        <div className="left-0 flex justify-start bg-lightgrey rounded-xl w-80 ">
          <input
            type="text"
            placeholder="Cari rekap pengerjaan ..."
            className=" w-80 h-9 md:pl-2  bg-lightgrey rounded-xl text-darkgrey focus:outline-none font-poppins text-sm"
          />
          <FaSearch className="text-darkgrey m-2" />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-8">
       <Cardrekap/>
       <Cardrekap/>
       <Cardrekap/>
       <Cardrekap/>
       <Cardrekap/>
       <Cardrekap/>
        
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
