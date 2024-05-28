import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar/navbar";

import RekapMainTable from "../../component/Table/RekapMainTable.jsx";
import { getRekapRequest } from "../../features/Rekap.jsx";


const RekapPage = () => {


  const [rekap, setRekap] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRekap = await getRekapRequest();

        setRekap(responseRekap.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex-grow">
        <Navbar data="Rekap Pengerjaan Tim 1" showBackButton={true} />
        <div className="p-12 flex flex-row justify-start">
          <div className="w-full">
            <RekapMainTable  name={"Rekap"}
              data={rekap}
              setData={setRekap} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekapPage;
