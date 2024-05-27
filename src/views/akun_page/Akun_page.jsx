import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import AkunMainTable from "../../component/Table/AkunMainTable.jsx";
import { getAkunRequest, getTimRequest } from "../../features/Akun.jsx";


const AkunPage = () => {
  const [akun, setAkun] = useState([]);

  const [tim, setTim] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAkun = await getAkunRequest();
        const responseTim = await getTimRequest();

        setAkun(responseAkun.data);
        setTim(responseTim.data);
        
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
        <div className="p-12 flex flex-row">
          <div className="w-3/5">
            <AkunMainTable name={"Akun"} data={akun} setData={setAkun}/>
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable name={"Tim"} data={tim} setData={setTim} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkunPage;
