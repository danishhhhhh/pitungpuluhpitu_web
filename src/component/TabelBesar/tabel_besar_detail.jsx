import React from "react";
import "../../App.css";
import Pagination from "./pagination.jsx";
import { FaSearch } from "react-icons/fa";


const TableBesarDetail = () => {
  const spareparts = [
    { nama: "Ban Tubeless Belakang Matic", kategori: "Ban", stok: 20 },
    { nama: "Oli Mesin", kategori: "Oli", stok: 12 },
    { nama: "Kampas Rem", kategori: "Rem", stok: 19 },
    { nama: "Busi", kategori: "Busi", stok: 18 },
    { nama: "Lampu LED Depan", kategori: "Lampu", stok: 17 },
    { nama: "Aki", kategori: "Aki", stok: 21 },
    { nama: "Gear Set", kategori: "Rantai", stok: 23 },
    { nama: "Filter Udara", kategori: "Filter", stok: 22 },
    { nama: "Spion", kategori: "Aksesoris", stok: 2 },
    { nama: "Jok", kategori: "Jok", stok: 10 },
  ];

  return (
    <div className="grid grid-rows-1 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/2">
          <input
            type="text"
            placeholder="Cari sparepart ..."
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
          />
          <FaSearch className="my-auto mx-4  text-darkgrey" />
        </div>
        <div className="flex flex-row gap-4">
          <a
            href="/cabang"
            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          >
            Cabang
          </a>

          <a
            href="/rekap"
            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          >
            Rekap Pengerjaan
          </a>
        </div>
      </div>
      <div className="h-4" />
      <div className="flex flex-col">
        <table className="border-collapse border-gray-300 rounded-lg ">
          <thead>
            <tr className="text-black">
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Nama Sparepart
              </th>
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Stok
              </th>
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Kategori
              </th>
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {spareparts.map((sparepart, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.nama}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.stok}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.kategori}
                </td>
                <td className="px-4 py-2 border border-grey text-center">
                  <button className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-4" />
      <Pagination />
    </div>
  );
};

export default TableBesarDetail;
