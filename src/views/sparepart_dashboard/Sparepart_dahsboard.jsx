import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import "./sparepart.css";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import SparepartMainTable from "../../component/Table/SparepartMainTable.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";

const SparepartdashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [spareparts, setSpareparts] = useState([
    { nama: "Ban Tubeless Belakang Matic", kategori: "Ban" },
    { nama: "Oli Mesin", kategori: "Oli" },
    { nama: "Kampas Rem", kategori: "Rem" },
    { nama: "Busi", kategori: "Busi" },
    { nama: "Lampu LED Depan", kategori: "Lampu" },
    { nama: "Aki", kategori: "Aki" },
    { nama: "Gear Set", kategori: "Rantai" },
    { nama: "Filter Udara", kategori: "Filter" },
    { nama: "Spion", kategori: "Aksesoris" },
    { nama: "Jok", kategori: "Jok" },
  ]);

  const [category, setCategory] = useState([
    { nama: "Ban" },
    { nama: "Oli" },
    { nama: "Lampu" },
    { nama: "Busi" },
  ]);

  const [column] = useState([
      'Nama Sparepart',
      'Kategori'
  ])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nama") {
      setNama(value);
    } else if (name === "kategori") {
      setKategori(value);
    }
  };

  const handleTambahSparepart = () => {
    const newSparepart = { nama, kategori };
    setSpareparts([...spareparts, newSparepart]);
    toggleModal();
  };
  const handleCloseModal = () => {
    toggleModal(false);
  };

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Data Sparepart" />
        <div className="p-12 flex flex-row">
          <div className="w-3/5">
            <div className="flex justify-between items-center">
              <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/2">
                <input
                  type="text"
                  placeholder="Cari sparepart ..."
                  className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                />
                <FaSearch className="my-auto mx-4  text-darkgrey" />
              </div>
              <button
                className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                onClick={toggleModal}
              >
                Tambah Sparepart
              </button>
            </div>
            <div className="h-6" />
            <SparepartMainTable spareparts={spareparts} setSpareparts={setSpareparts} columns={column}/>
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable name={"Kategori"} data={category} setData={setCategory}/>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          />
          <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/4">
            <div className="flex flex-col justify-end">
              <button
                className="text-zinc-900 flex justify-end"
                onClick={handleCloseModal}
              >
                <IoIosClose className="w-8 h-8 relative" />
              </button>
              <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                Tambah Sparepart
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
              <div className="text-center text-black text-sm font-medium font-['Poppins']">
                Nama Sparepart
              </div>
              <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  name="nama"
                  value={nama}
                  onChange={handleChange}
                  className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                  placeholder="Tambahkan Sparepart"
                  style={{
                    caretColor: "black",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
              <div className="text-center text-black text-sm font-medium font-['Poppins']">
                Kategori
              </div>
              <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                <select
                  name="kategori"
                  value={kategori}
                  onChange={handleChange}
                  className="w-full text-zinc-900 text-base font-poppins focus:outline-none bg-transparent border-none"
                >
                  <option value="Lainnya">Lainnya</option>
                  <option value="Ban">Ban</option>
                  <option value="Oli">Oli</option>
                  <option value="Rem">Rem</option>
                  <option value="Busi">Busi</option>
                  <option value="Lampu">Lampu</option>
                  <option value="Aki">Aki</option>
                  <option value="Rantai">Rantai</option>
                  <option value="Filter">Filter</option>
                  <option value="Aksesoris">Aksesoris</option>
                  <option value="Jok">Jok</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
              onClick={handleTambahSparepart}
            >
              Tambah
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SparepartdashboardPage;
