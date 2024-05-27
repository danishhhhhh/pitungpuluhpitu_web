import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import { getMekanikRequest, getDetailTimRequest } from "../../features/Detail.jsx"


const DetailtimPage = () => {
  const [mekanik, setMekanik] = useState([]);
  const [stocktim, setStockTim] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDetail = await getMekanikRequest();
        const responseMekanik = await getDetailTimRequest();

        setMekanik(responseDetail.data);
        setStockTim(responseMekanik.data);
        
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
            <DetailMainTable
              name={"Detail_Tim"}
              data={stocktim}
              setData={setStockTim}
            />
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable
              name={"Mekanik"}
              data={mekanik}
              setData={setMekanik}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailtimPage;
