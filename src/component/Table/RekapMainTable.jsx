import React from "react";
import "../../App.css";
import Pagination from "./Pagination.jsx";
import { FaSearch } from "react-icons/fa";

const RekapMainTable = ({ name, data }) => {
  return (
    <div className="grid grid-rows-1 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
          <input
            type="text"
            placeholder={`Cari ${name.toLowerCase()} ...`}
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
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
                Jasa
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Sparepart
              </th>
              <th className="px-3 py-3 font-poppins border border-grey text-darkgrey font-medium">
                Tanggal
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((sparepart, index) => (
              <tr key={index}>
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
                  {sparepart.jasa}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.sparepart}
                </td>
                <td className="px-3 py-2 font-poppins border border-grey">
                  {sparepart.tanggal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-6" />
      <Pagination />
    </div>
  );
};

export default RekapMainTable;
