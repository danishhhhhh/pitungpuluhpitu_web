import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import SparepartMainTable from "../../component/Table/SparepartMainTable.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";

// Import your API function
import {
  getKategoriRequest,
  getSparepartRequest,
} from "../../features/Sparepart.jsx";

const SparepartDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spareparts, setSpareparts] = useState([]);
  const [category, setCategory] = useState([]);

  const [column] = useState(["Nama Sparepart", "Kategori"]);

  // useEffect to fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSparepart = await getSparepartRequest();
        const responseKategori = await getKategoriRequest();

        setSpareparts(responseSparepart.data);
        setCategory(responseKategori.data);
        console.log(responseSparepart.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure it runs only once when component mounts

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Data Sparepart" />
        <div className="p-12 flex flex-row">
          <div className="w-3/5">
            <SparepartMainTable
              spareparts={spareparts}
              setSpareparts={setSpareparts}
              columns={column}
            />
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable
              name={"Kategori"}
              data={category}
              setData={setCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparepartDashboard;
