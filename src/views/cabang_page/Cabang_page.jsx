import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar/navbar";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import { getCabangRequest } from "../../features/Cabang.jsx";

const CabangPage = () => {
  const [cabang, setCabang] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCabang = await getCabangRequest();

        setCabang(responseCabang.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex-grow">
        <Navbar data="Cabang Tim 1" showBackButton={true} />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-4/6">
            <DefaultMainTable
              name={"Cabang"}
              data={cabang}
              setData={setCabang}
            />
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default CabangPage;
