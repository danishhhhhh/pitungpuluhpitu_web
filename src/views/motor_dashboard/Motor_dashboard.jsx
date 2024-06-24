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
  postEditTahunRequest,
  getSearchMotorRequest,
} from "../../features/Motor.jsx";

const MotordashboardPage = () => {
<<<<<<< HEAD
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-1 ">
                <Navbar data="Data Motor" />
                <div className="flex flex-col w-full">
                    <div className="flex mt-20 ml-45 bg-gray-800 ">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari Motor ..."
                                className="w-96 h-9 md:pl-2 pr-10 bg-lightgrey rounded-xl text-darkgrey focus:outline-none font-poppins text-sm"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <IoSearchOutline className="text-gray-400" />
                            </div>
                        </div>
                        <div className="ml-auto flex">
                            <button className="bg-yellow px-5 py-2 rounded-lg text-black font-normal font-poppins text-sm">
                                Tambah Motor
                            </button>
                            <button className="bg-yellow px-5 py-2 rounded-lg text-black font-normal font-poppins text-sm ml-40">
                                Tambah Motor
                            </button>
                        </div>
                    </div>
=======
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [motor, setMotor] = useState([]);
  const [year, setYear] = useState([]);
>>>>>>> 7a2cdecc821a842df5aa43488dab026636cf5a1d

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
      fetchData(currentPage)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postEditMotor = async (id) => {
    try {
      await postEditMotorRequest(motorValue, id);
      fetchData(currentPage)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteMotor = async (id) => {
    try {
      await deleteMotorRequest(id);
      fetchData(currentPage)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAddTahun = async () => {
    try {
      await postAddTahunRequest(yearValue);
      fetchData(currentPage)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postEditTahun = async (id) => {
    try {
      await postEditTahunRequest(yearValue, id);
      fetchData(currentPage)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteTahun = async (id) => {
    try {
      await deleteTahunRequest(id);
      fetchData(currentPage)
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
