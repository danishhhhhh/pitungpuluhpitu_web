import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import { getPekerjaanRequest } from "../../features/Pekerjaan.jsx";


const PekerjaanPage = () => {
  const [pekerjaan, setPekerjaan] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePekerjaan = await getPekerjaanRequest();

        setPekerjaan(responsePekerjaan.data);

     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Detail Tim 1" showBackButton={true} />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-3/5">
            <DefaultMainTable
              name={"Pekerjaan"}
              data={pekerjaan}
              setData={setPekerjaan}
            />
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default PekerjaanPage;
