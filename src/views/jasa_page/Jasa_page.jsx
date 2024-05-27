import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import { getJasaRequest } from "../../features/Jasa.jsx";

const JasaPage = () => {
  const [jasa, setJasa] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseJasa = await getJasaRequest();

        setJasa(responseJasa.data);
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
            <DefaultMainTable name={"Jasa"} data={jasa} setData={setJasa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JasaPage;
