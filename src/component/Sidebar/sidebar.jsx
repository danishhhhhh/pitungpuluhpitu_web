import React from 'react';
import { FaBox, FaToolbox, FaMotorcycle, FaTools, FaUserCog, FaUserCircle } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const activeClass = "bg-yellow text-bluegrey";
  const inactiveClass = "bg-bluegrey text-white";

  return (
    <div className="w-80 2xl:w-80 md:w-60 bg-lightnavy fixed h-full left-0 top-0 p-5">
      <div>
        <img src="src/assets/img/logo.svg" alt="" className="w-52 top-0 2xl:m-8 xl:m-1 rounded" />
        <div className="top-10 my-14 flex">
          <img src="src/assets/img/profile.svg" alt="" className="rounded-lg w-10" />
          <div className="2xl:mx-4 2xl:w-auto xl:mx-2">
            <p className="font-poppins text-white 2xl:text-base 2xl:w-36 xl:mr-26 2xl:text-left xl:text-xs xl:w-28 xl:flex xl:justify-start">
              Danish Ardiyanta
            </p>
            <p className="font-poppins text-yellow 2xl:text-left 2xl:text-sm xl:text-xs xl:text-left">Admin</p>
          </div>
          <div className="bg-bluegrey rounded-2xl 2xl:w-10 2xl:h-10 2xl:flex 2xl:justify-center 2xl:items-center xl:flex xl:justify-center xl:items-center">
            <svg className="h-8 w-8 text-red-500" color="white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
              <circle cx="12" cy="5" r="1" />
            </svg>
          </div>
        </div>
        <ul className="text-white font-poppins 2xl:font-normal xl:text-sm">
          <li className={`mb-4 rounded-lg py-4 ${location.pathname === '/stock' ? activeClass : inactiveClass}`}>
            <NavLink to="/stock" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaBox className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Stock
              </div>
            </NavLink>
          </li>
          <li className={`mb-4 rounded-lg py-4 ${location.pathname === '/sparepart' ? activeClass : inactiveClass}`}>
            <NavLink to="/sparepart" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaToolbox className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Sparepart
              </div>
            </NavLink>
          </li>
          <li className={`mb-4 rounded-lg py-4 ${location.pathname === '/motor' ? activeClass : inactiveClass}`}>
            <NavLink to="/motor" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaMotorcycle className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Motor
              </div>
            </NavLink>
          </li>
          <li className={`mb-4 rounded-lg py-4 ${location.pathname === '/pekerjaan' ? activeClass : inactiveClass}`}>
            <NavLink to="/pekerjaan" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaTools className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Pekerjaan
              </div>
            </NavLink>
          </li>
          <li className={`mb-4 rounded-lg py-4 ${location.pathname === '/jasa' ? activeClass : inactiveClass}`}>
            <NavLink to="/jasa" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaUserCog className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Jasa
              </div>
            </NavLink>
          </li>
          <li className={`mb-4 rounded-lg py-4 ${location.pathname === '/akun' ? activeClass : inactiveClass}`}>
            <NavLink to="/akun" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaUserCircle className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Akun
              </div>
            </NavLink>
          </li>
          <li className="mb-4 rounded-lg text-white py-4 bg-red active:bg-yellow active:text-bluegrey mt-64">
            <a href="/" className="flex items-center justify-between">
              <div className="flex items-center justify-center text-center w-full">
                Keluar
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
