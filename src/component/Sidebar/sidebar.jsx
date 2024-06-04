import React, { useState } from "react";
import {
  FaBox,
  FaToolbox,
  FaMotorcycle,
  FaTools,
  FaUserCog,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import LogoutModal from "../Modal/LogoutModal.jsx";
import {getExportTimStok} from "../../features/Stock.jsx";
import {logoutRequest} from "../../features/Auth.jsx";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeClass = "bg-yellow text-bluegrey";
  const inactiveClass = "bg-bluegrey text-white";
  const [isModalOpen, setModalOpen] = useState(false);
  const imageSrc = localStorage.getItem("image");
  const defaultImage ="src/assets/default_image.png"

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleLogout = async () => {
    try {
      const response = await logoutRequest();
      navigate("/login", { replace: true });
      console.log(response)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOpenModal = () => {
    console.log(imageSrc ? "imageSrc" : "defaultImage")
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-80 bg-lightnavy h-screen left-0 sticky top-0 p-5">
      <img
        src="src/assets/img/logo.svg"
        alt=""
        className="w-52 top-0 rounded mx-auto mt-8"
      />
      <div className="top-10 my-14 flex items-center justify-between">
        <div className="flex flex-row">
           <img
            src={imageSrc ? imageSrc : defaultImage}
            alt=""
            className="rounded-lg w-10 object-cover"
          />
          <div className="w-3" />
          <div className="">
            <p className="font-poppins text-white">{localStorage.getItem("name")}</p>
            <p className="font-poppins text-yellow text-sm">{localStorage.getItem("role")}</p>
          </div>
        </div>
        <div
          className={`rounded-lg p-2 ${
            location.pathname === "/edit" ? activeClass : inactiveClass
          }  rounded-xl`}
        >
          <NavLink to="/edit">
            <MdModeEditOutline className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
      <div className="justify-between flex flex-col">
        <ul className="text-white font-poppins">
          <li
            className={`mb-4 rounded-lg py-4 px-10 ${
              location.pathname === "/stock" || location.pathname === "/detail" || location.pathname === "/rekap"|| location.pathname === "/cabang"||location.pathname === "/editrekap"
                ? activeClass
                : inactiveClass
            }`}
            onClick={() => handleNavigation("/stock")}
          >
            <div className="flex flex-row items-center">
              <FaBox />
              <div className="w-3" />
              Stock
            </div>
          </li>

          <li
            className={`mb-4 rounded-lg py-4 px-10 ${
              location.pathname === "/sparepart" ? activeClass : inactiveClass
            }`}
            onClick={() => handleNavigation("/sparepart")}
          >
            <div className="flex flex-row items-center">
              <FaToolbox />
              <div className="w-3" />
              Sparepart
            </div>
          </li>

          <li
            className={`mb-4 rounded-lg py-4 px-10 ${
              location.pathname === "/motor" ? activeClass : inactiveClass
            }`}
            onClick={() => handleNavigation("/motor")}
          >
            <div className="flex flex-row items-center">
              <FaMotorcycle />
              <div className="w-3" />
              Motor
            </div>
          </li>

          <li
            className={`mb-4 rounded-lg py-4 px-10 ${
              location.pathname === "/pekerjaan" ? activeClass : inactiveClass
            }`}
            onClick={() => handleNavigation("/pekerjaan")}
          >
            <div className="flex flex-row items-center">
              <FaTools />
              <div className="w-3" />
              Pekerjaan
            </div>
          </li>

          <li
            className={`mb-4 rounded-lg py-4 px-10 ${
              location.pathname === "/jasa" ? activeClass : inactiveClass
            }`}
            onClick={() => handleNavigation("/jasa")}
          >
            <div className="flex flex-row items-center">
              <FaUserCog />
              <div className="w-3" />
              Jasa
            </div>
          </li>

          {localStorage.getItem("role") === "Owner" && (
              <li
                  className={`mb-4 rounded-lg py-4 px-10 ${
                      location.pathname === "/akun" ? activeClass : inactiveClass
                  }`}
                  onClick={() => handleNavigation("/akun")}
              >
                <div className="flex flex-row items-center">
                  <FaUserCircle />
                  <div className="w-3" />
                  Akun
                </div>
              </li>
          )}
        </ul>
        <button
          onClick={handleOpenModal}
          className="bg-red rounded-lg py-4 px-10 flex items-center justify-between"
        >
          <div className="flex items-center justify-center text-center w-full text-md font-medium text-white">
            Keluar
          </div>
        </button>
      </div>
      <LogoutModal
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Sidebar;
