import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import {
    getMotorRequest,
    getTahunRequest,
   
  } from "../../features/Motor.jsx";
  
const MotordashboardPage = () => {
  const [motor, setMotor] = useState([]);

  const [year, setYear] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMotor = await getMotorRequest();
        const responseTahun = await getTahunRequest();

        setMotor(responseMotor.data);
        setYear(responseTahun.data);

        console.log(responseTahun.data);
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
            <DefaultMainTable name={"Motor"} data={motor} setData={setMotor} />
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable
              name={"Tahun"}
              data={year}
              setData={setYear}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotordashboardPage;
