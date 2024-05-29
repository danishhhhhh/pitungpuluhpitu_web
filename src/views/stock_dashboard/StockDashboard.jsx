import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";
import TimCard from "../../component/Dashboard/TimCard.jsx";
import RekapCard from "../../component/Dashboard/RekapCard.jsx";
import { getTimRequest, getPendingRequest } from "../../features/Stock.jsx";

const StockDashboard = () => {
  const [tim, setTim] = useState([]);
  const [pending, setPending] = useState([]);

  const fetchData = async () => {
    try {
      const responseTim = await getTimRequest();
      const responsePending = await getPendingRequest(); // Fix this line

      setTim(responseTim.data);
      setPending(responsePending.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Data Stock" />
        <div className="p-12 flex flex-col">
          <div className="flex justify-between ">
            <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
              <input
                type="text"
                placeholder="Cari tim ..."
                className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
              />
              <FaSearch className="my-auto mx-4  text-darkgrey" />
            </div>
            <button className="bg-yellow  h-10  px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm ">
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
          {pending && pending.length > 0 && (
            <div className="mt-12">
              <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
                <input
                  type="text"
                  placeholder="Cari sparepart ..."
                  className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                />
                <FaSearch className="my-auto mx-4 text-darkgrey" />
              </div>
            </div>
          )}
          <div className="grid gap-4 grid-cols-3 mt-8 w-5/6">
            {pending.map((item, index) => (
              <RekapCard key={index} data={item} fetchFunction={fetchData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
