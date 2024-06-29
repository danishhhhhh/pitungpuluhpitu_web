import { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import { IoSearchOutline } from "react-icons/io5";
import {
  getMotorRequest,
  getTahunRequest,
  postAddMotorRequest,
  postEditMotorRequest,
  deleteMotorRequest,
  deleteTahunRequest,
  postAddTahunRequest,
  postEditTahunRequest,
  getSearchMotorRequest,
} from "../../features/Motor.jsx";

const MotordashboardPage = () => {
  const [motorValue, setMotorValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [motor, setMotor] = useState([]);
  const [year, setYear] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async (page = 1) => {
    try {
      const responseMotor = await getMotorRequest(page);
      const responseTahun = await getTahunRequest();

      setCurrentPage(responseMotor.current_page);
      setTotalData(responseMotor.total_item);
      setTotalPage(responseMotor.total_page);

      setMotor(responseMotor.data);
      setYear(responseTahun.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchMotor = async (query) => {
    try {
      const responseMotor = await getSearchMotorRequest(query);
      setMotor(responseMotor.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAddMotor = async () => {
    try {
      await postAddMotorRequest(motorValue);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error adding motor:", error);
    }
  };

  const postEditMotor = async (id) => {
    try {
      await postEditMotorRequest(motorValue, id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error editing motor:", error);
    }
  };

  const deleteMotor = async (id) => {
    try {
      await deleteMotorRequest(id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error deleting motor:", error);
    }
  };

  const postAddTahun = async () => {
    try {
      await postAddTahunRequest(yearValue);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error adding year:", error);
    }
  };

  const postEditTahun = async (id) => {
    try {
      await postEditTahunRequest(yearValue, id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error editing year:", error);
    }
  };

  const deleteTahun = async (id) => {
    try {
      await deleteTahunRequest(id);
      fetchData(currentPage);
    } catch (error) {
      console.error("Error deleting year:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Motor Dashboard" />
        <div className="p-12 flex flex-row">
          <div className="w-4/6">
            <DefaultMainTable
              name={"Motor"}
              data={motor}
              setData={setMotor}
              currentPage={currentPage}
              totalData={totalData}
              totalPage={totalPage}
              setCurrentPage={setCurrentPage}
              value={motorValue}
              setValue={setMotorValue}
              handleSubmitPost={postAddMotor}
              handleEditPost={postEditMotor}
              handleDeletePost={deleteMotor}
              handleSearch={getSearchMotor}
            />
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable
              name={"Tahun"}
              data={year}
              setData={setYear}
              value={yearValue}
              setValue={setYearValue}
              handleSubmitPost={postAddTahun}
              handleEditPost={postEditTahun}
              handleDeletePost={deleteTahun}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotordashboardPage;
