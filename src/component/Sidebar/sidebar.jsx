import React from "react";
import { FaBox, FaToolbox, FaMotorcycle, FaTools, FaUserCog, FaUserCircle } from "react-icons/fa";
import { Link , useLocation} from "react-router-dom";

const Sidebar = () => {
 let {path} = useLocation();
 console.log(path)
 
  return (
    <div className="w-80 2xl:w-80 md:w-60 bg-lightnavy fixed h-screen left-0 top-0 p-5 transition-transform translate-x-full sm:translate-x-0">
      <div>
        <img
          src="src\assets\img\logo.svg"
          alt=""
          className="w-52 top-0 2xl:m-8 xl:m-1 rounded"
        />
        <div className="top-10 my-14  flex">
          <img
            src="src\assets\img\profile.svg"
            alt=""
            className="rounded-lg   w-10"
          />
          <div className="2xl:mx-4 2xl:w-auto xl:mx-2">
            <p className="font-poppins text-white 2xl:text-base  2xl:w-36 xl:mr-26 2xl:text-left xl:text-xs xl:w-28 xl:flex xl:justify-start">
              Danish Ardiyanta
            </p>
            <p className="font-poppins text-yellow 2xl:text-left 2xl:text-sm xl:text-xs xl:text-left ">
              Admin
            </p>
          </div>
          <div className="bg-bluegrey rounded-2xl 2xl:w-10 2xl:h-10 2xl:flex 2xl:justify-center 2xl:items-center 2xl:ml-0 xl:ml-0 xl:flex xl:justify-center xl:items-center">
            <svg
              className="h-8 w-8 text-red-500"
              color="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
              <circle cx="12" cy="5" r="1" />
            </svg>
          </div>
        </div>
        <ul className="text-white font-poppins 2xl:font-normal xl:text-sm">
          <div className="mb-4 rounded-lg text-white py-4 bg-bluegrey ">
            <Link to={"/stock"}  className="flex items-center justify-between px-8 " >
              <div className="flex items-center ">
                <FaBox className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Stock
              </div>
            </Link>
          </div>
          <li className="mb-4 rounded-lg text-white py-4 bg-bluegrey">
            <Link to="/sparepart" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaToolbox className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Sparepart
              </div>
            </Link>
          </li>
          <li className="mb-4 rounded-lg text-white py-4 bg-bluegrey">
            <Link to="/motor" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaMotorcycle className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Motor
              </div>
            </Link>
          </li>
          <li className="mb-4 rounded-lg text-white py-4 bg-bluegrey">
            <Link to="/pekerjaan" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaTools className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Pekerjaan
              </div>
            </Link>
          </li>
          <li className="mb-4 rounded-lg text-white py-4 bg-bluegrey">
            <Link to="/jasa" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaUserCog className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Jasa
              </div>
            </Link>
          </li>
          <li className="mb-64 rounded-lg text-white py-4 bg-bluegrey">
            <Link to="/akun" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaUserCircle className="inline-flex 2xl:w-4 2xl:h-4 2xl:mr-2 xl:w-3 xl:mr-2" />
                Akun
              </div>
            </Link>
          </li>
          <li className="mb-4 rounded-lg text-white py-4 bg-red">
            <Link to="/keluar" className="flex items-center justify-between">
              <div className="flex items-center justify-center text-center w-full">
                Keluar
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
