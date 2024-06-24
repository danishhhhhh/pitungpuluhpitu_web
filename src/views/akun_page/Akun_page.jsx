import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import AkunMainTable from "../../component/Table/AkunMainTable.jsx";
import {
  getAkunRequest,
  getTimRequest,
  postAddTimRequest,
  postEditTimRequest,
  deleteTimRequest,
  postAkunRequest,
  postEditAkunRequest,
  deleteAkunRequest,
  getSearchAkunRequest
} from "../../features/Akun.jsx";

const AkunPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [akun, setAkun] = useState([]);
  const [tim, setTim] = useState([]);
  const [timValue, setTimValue] = useState();

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

  const getSearchAkun = async (query) => {
    try {
      const responseAkun = await getSearchAkunRequest(query);
      setAkun(responseAkun.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postAddTim = async () => {
    try {
      await postAddTimRequest(timValue);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postEditTim = async (id) => {
    try {
      await postEditTimRequest(timValue, id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteTim = async (id) => {
    try {
      await deleteTimRequest(id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postAddAkun = async (role, username, password, name, tim) => {
    try {
      await postAkunRequest(role, username, password, name, tim);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postEditAkun = async (role, username, password, name, tim, id) => {
    try {
      console.log(
        "halo gaisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
      );
      await postEditAkunRequest(role, username, password, name, tim, id);
      fetchData(currentPage);
      console.log(
        "halo gaisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postDeleteAkun = async (id) => {
    try {
      await deleteAkunRequest(id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  return (
<<<<<<< HEAD
    <div className="flex ">
      <Sidebar />
      <Navbar data="Data Akun" />

=======
    <div className="h-full flex flex-row">
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
              tim={tim}
              handleSubmitPost={postAddAkun}
              handleEditPost={postEditAkun}
              handleDeletePost={postDeleteAkun}
              handleSearch={getSearchAkun}
            />
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable
              name={"Tim"}
              data={tim}
              setData={setTim}
              value={timValue}
              setValue={setTimValue}
              handleSubmitPost={postAddTim}
              handleEditPost={postEditTim}
              handleDeletePost={deleteTim}
            />
          </div>
        </div>
      </div>
>>>>>>> 7a2cdecc821a842df5aa43488dab026636cf5a1d
    </div>
  );
};

export default AkunPage;
