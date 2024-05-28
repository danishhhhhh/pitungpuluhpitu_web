import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import {
  getPekerjaanRequest,
  postAddPekerjaanRequest,
  postEditPekerjaanRequest,
  deletePekerjaanRequest,
} from "../../features/Pekerjaan.jsx";

const PekerjaanPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [pekerjaan, setPekerjaan] = useState([]);
  const [pekerjaanValue, setPekerjaanValue] = useState();


  const fetchData = async (page = 1) => {
    try {
      const responsePekerjaan = await getPekerjaanRequest(page);

      setCurrentPage(responsePekerjaan.current_page);
      setTotalData(responsePekerjaan.total_item);
      setTotalPage(responsePekerjaan.total_page);

      setPekerjaan(responsePekerjaan.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAddPekerjaan = async () => {
    try {
      await postAddPekerjaanRequest(pekerjaanValue);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postEditPekerjaan = async (id) => {
    try {
      await postEditPekerjaanRequest(pekerjaanValue, id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deletePekerjaan = async (id) => {
    try {
      await deletePekerjaanRequest(id);
      console.log("sadasdsadasdasdsa");
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
        <Navbar data="Pekerjaan Dashboard" />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-4/6">
            <DefaultMainTable
              name={"Pekerjaan"}
              data={pekerjaan}
              setData={setPekerjaan}
              currentPage={currentPage}
              totalData={totalData}
              totalPage={totalPage}
              setCurrentPage={setCurrentPage}
              value={pekerjaanValue}
              setValue={setPekerjaanValue}
              handleSubmitPost={postAddPekerjaan}
              handleEditPost={postEditPekerjaan}
              handleDeletePost={deletePekerjaan}
            />
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default PekerjaanPage;
