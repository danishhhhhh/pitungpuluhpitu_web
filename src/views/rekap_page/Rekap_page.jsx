import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../component/Navbar/navbar";
import { TimContext } from "../../context/Context.jsx";
import RekapMainTable from "../../component/Table/RekapMainTable.jsx";
import Sidebar from "../../component/Sidebar/sidebar";

import {
  getRekapRequest,
  getSearchRekapRequest,
} from "../../features/Rekap.jsx";

const RekapPage = () => {
  const { timId } = useContext(TimContext);
  const [rekap, setRekap] = useState([]);

  const fetchData = async () => {
    try {
      const responseRekap = await getRekapRequest(timId);
      setRekap(responseRekap.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchRekap = async (query) => {
    try {
      const responseRekap = await getSearchRekapRequest(query, timId);
      setRekap(responseRekap.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Rekap Pengerjaan Tim 1" showBackButton={true} />
        <div className="p-12 flex flex-row justify-start">
          <div className="w-full">
            <RekapMainTable
              name={"Rekap"}
              data={rekap}
              setData={setRekap}
              handleSearch={getSearchRekap}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekapPage;
