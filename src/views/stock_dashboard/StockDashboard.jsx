import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";
import TimCard from "../../component/Dashboard/TimCard.jsx";
import RekapCard from "../../component/Dashboard/RekapCard.jsx";
const StockDashboard = () => {
  return (
    <div className="min-h-screen flex flex-row">
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
          <div className="my-6 flex flex-row mt-8 w-full">
            <div className="flex flex-row overflow-x-auto scroll-smooth scroll whitespace-nowrap max-w-7xl  scrollbar-thin scrollbar-track-white scrollbar-thumb-grey">
              <TimCard name="Tim 1" />
              <TimCard name="Tim 2" />
              <TimCard name="Tim 3" />
              <TimCard name="Tim 4" />
              <TimCard name="Tim 5" />
              <TimCard name="Tim 5" />
              <TimCard name="Tim 5" />
            </div>
          </div>
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
          <div className="grid gap-4 grid-cols-3 mt-8 w-5/6">
            <RekapCard />
            <RekapCard />
            <RekapCard />
            <RekapCard />
            <RekapCard />
            <RekapCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
