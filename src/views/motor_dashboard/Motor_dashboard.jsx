import { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import {
  getMotorRequest,
  getTahunRequest,
  postAddMotorRequest,
  postEditMotorRequest,
  deleteMotorRequest,
  deleteTahunRequest,
  postAddTahunRequest,
  postEditTahunRequest
} from "../../features/Motor.jsx";

const MotordashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [motor, setMotor] = useState([]);
  const [year, setYear] = useState([]);
 
  const [motorValue, setMotorValue] = useState();
  const [yearValue, setYearValue] = useState();

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
  const postAddMotor = async () => {
    try {
      await postAddMotorRequest(motorValue);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postEditMotor = async (id) => {
    try {
      await postEditMotorRequest(motorValue, id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteMotor = async (id) => {
    try {
      await deleteMotorRequest(id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAddTahun = async () => {
    try {
      await postAddTahunRequest(yearValue);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postEditTahun = async (id) => {
    try {
      await postEditTahunRequest(yearValue, id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteTahun = async (id) => {
    try {
      await deleteTahunRequest(id);
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
