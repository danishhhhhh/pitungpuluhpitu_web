import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import SparepartMainTable from "../../component/Table/SparepartMainTable.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";

const SparepartDashboard = () => {
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

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Data Sparepart" />
        <div className="p-12 flex flex-row">
          <div className="w-3/5">
            <SparepartMainTable spareparts={spareparts} setSpareparts={setSpareparts} columns={column}/>
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable name={"Kategori"} data={category} setData={setCategory}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparepartDashboard;
