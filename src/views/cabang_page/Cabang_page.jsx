import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import Sidebar from "../../component/Sidebar/sidebar";

import {
  getCabangRequest,
  postAddCabangRequest,
  postEditCabangRequest,
  deleteCabangRequest,
  getSearchCabangRequest,
} from "../../features/Cabang.jsx";
import { TimContext } from "../../context/Context.jsx";

const CabangPage = () => {
  const { timId } = useContext(TimContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [cabang, setCabang] = useState([]);
  const [cabangValue, setCabangValue] = useState();

  const fetchData = async (page = 1) => {
    try {
      const responseCabang = await getCabangRequest(page);

      setCurrentPage(responseCabang.current_page);
      setTotalData(responseCabang.total_item);
      setTotalPage(responseCabang.total_page);

      setCabang(responseCabang.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchCabang = async (query) => {
    try {
      const responseCabang = await getSearchCabangRequest(query, timId);
      setCabang(responseCabang.data);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  const postAddCabang = async () => {
    try {
      await postAddCabangRequest(cabangValue, timId);
      fetchData(currentPage); // Refresh data after adding
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const postEditCabang = async (id) => {
    try {
      await postEditCabangRequest(cabangValue, id);
      fetchData(currentPage); // Refresh data after editing
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const deleteCabang = async (id) => {
    try {
      await deleteCabangRequest(id);
      fetchData(currentPage); // Refresh data after deleting
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Cabang Dashboard" />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-4/6">
            <DefaultMainTable
              name={"Cabang"}
              data={cabang}
              setData={setCabang}
              currentPage={currentPage}
              totalData={totalData}
              totalPage={totalPage}
              setCurrentPage={setCurrentPage}
              value={cabangValue}
              setValue={setCabangValue}
              handleSubmitPost={postAddCabang}
              handleEditPost={postEditCabang}
              handleDeletePost={deleteCabang}
              handleSearch={getSearchCabang}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabangPage;
