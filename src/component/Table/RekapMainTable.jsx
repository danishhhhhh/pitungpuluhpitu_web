import React, { useState } from "react";
import "../../App.css";
import Pagination from "./Pagination.jsx";
import { FaSearch } from "react-icons/fa";
import { debounce } from "../../component/debounce/Debounce.jsx";
import { FaEllipsisV } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";


import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const RekapMainTable = ({ name, data, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectIndex, setSelectIndex] = useState();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = debounce((query) => {
    handleSearch(query);
  }, 1500);

  const handleRowClick = (index) => {
    console.log("Row clicked:", index);
  };
  const handleDetailClick = (index) => {
    setSelectIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleToEdit =()=>{
    
    navigate("/editrekap")
  }

  return (
    <div className="grid grid-rows-1 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
          <input
            type="text"
            placeholder={`Cari ${name.toLowerCase()} ...`}
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
            onChange={handleSearchInputChange}
            value={searchQuery}
          />
          <FaSearch className="my-auto mx-4 text-darkgrey" />
        </div>
      </div>
      <div className="h-6" />
      <div className="flex flex-col">
        <table className="border-collapse border-gray-300 rounded-lg">
          <thead>
            <tr className="text-black">
              <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                Nama Cabang
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Nama Mekanik
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Plat Nomor
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Tipe Motor
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Tahun Motor
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Km Motor
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Pekerjaan
              </th>

              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Tanggal
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((sparepart, index) => (
              <tr key={index} onClick={() => handleRowClick(index)}>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.cabang}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.mekanik}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.plat_motor}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.motor}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.tahun}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.km_motor}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.pekerjaan}
                </td>

                <td className="px-3 py-2 font-poppins border border-grey">
                  {new Date(sparepart.tanggal).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey text-center justify-center">
                  <Menu
                    placement="left"
                    animate={{
                      mount: { x: 0 },
                      unmount: { x: 25 },
                    }}
                  >
                    <MenuHandler>
                      <button>
                        <FaEllipsisV className="mx-auto" />
                      </button>
                    </MenuHandler>

                    <MenuList>
                      <MenuItem onClick={() => handleDetailClick(index)}>
                        Detail
                      </MenuItem>
                      <MenuItem onClick={handleToEdit}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={handleCloseModal}
            />
            <div className="w-1/4 p-5 bg-white rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex z-10">
              <div className="self-stretch max-h-[80vh] overflow-y-auto flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch justify-between items-center gap-2.5 inline-flex">
                  <div className="justify-start items-center gap-2.5 flex mt-3 mb-2">
                    <p className="text-center text-black text-2xl font-medium font-poppins leading-snug ">
                      Detail Rekap
                    </p>
                  </div>
                  <div>
                    <button
                      className="text-zinc-900 flex justify-end"
                      onClick={handleCloseModal}
                    >
                      <IoIosClose className="w-8 h-8 relative" />
                    </button>
                  </div>
                </div>
                <div className="self-stretch h-[559px] flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Tanggal
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {new Date(data[selectIndex].tanggal).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Cabang
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].cabang}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Mekanik
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].mekanik}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Plat Motor
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].plat_motor}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Tipe Motor
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].motor}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Tahun Motor
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].tahun}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      KM Motor
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].km_motor}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Pekerjaan
                    </p>
                    <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                      {data[selectIndex].pekerjaan}
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Jasa
                    </p>
                    <p className="text-darkgrey text-sm font-normal font-poppins leading-snug">
                      {data[selectIndex].jasa &&
                      data[selectIndex].jasa.length > 0
                        ? data[selectIndex].jasa.join(", ")
                        : "-"}
                    </p>
                  </div>
                  <div className="self-stretch h-[103px] flex-col justify-start items-start flex">
                    <p className="text-black text-base font-medium font-poppins leading-snug">
                      Sparepart
                    </p>
                    <p className="self-stretch text-gray-600 text-sm font-normal font-poppins leading-snug">
                      {data[selectIndex].sparepart &&
                      data[selectIndex].sparepart.length > 0
                        ? data[selectIndex].sparepart.join(", ")
                        : "-"}{" "}
                    </p>
                  </div>
                </div>
                <button
                  className="self-center bg-red-500 text-white rounded-lg px-4 py-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-6" />
      <Pagination />
    </div>
  );
};

export default RekapMainTable;
