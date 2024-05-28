import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import AkunMainTable from "../../component/Table/AkunMainTable.jsx";
import { getAkunRequest, getTimRequest } from "../../features/Akun.jsx";


const AkunPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [akun, setAkun] = useState([]);
  const [tim, setTim] = useState([]);
  const fetchData = async (page = 1) => {
    try {
      const responseAkun = await getAkunRequest(page);
      const responseTim = await getTimRequest();

      setCurrentPage(responseAkun.current_page);
      setTotalData(responseAkun.total_item);
      setTotalPage(responseAkun.total_page);

      setAkun(responseAkun.data);
      setTim(responseTim.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Akun Dashboard" />
        <div className="p-12 flex flex-row">
          <div className="w-4/6">
            <AkunMainTable
                name={"Akun"}
                data={akun}
                setData={setAkun}
                currentPage={currentPage}
                totalData={totalData}
                totalPage={totalPage}
                setCurrentPage={setCurrentPage}
            />
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
