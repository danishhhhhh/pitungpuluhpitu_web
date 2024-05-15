import React from "react";
import { FaBox } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  
  return (
    <div className="w-80 bg-lightnavy fixed h-full left-0 top-0 p-5 ">
      <div>
        <img
          src="src\assets\img\logo.svg"
          alt=""
          className="w-52 top-0 m-8 rounded"
        />
        <div className="top-10 my-14 flex">
          <img
            src="src\assets\img\profile.svg"
            alt=""
            className="rounded-lg   w-10"
          />
          <div className="mx-4">
            <p className="font-poppins text-white text-base">
              Danish Ardiyanta
            </p>
            <p className="font-poppins text-yellow text-left text-sm">Admin</p>
          </div>
          <div className="bg-bluegrey rounded-2xl w-10 h-10 flex justify-center items-center ml-7">
            <svg
              class="h-8 w-8 text-red-500"
              color="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="1" /> <circle cx="12" cy="19" r="1" />{" "}
              <circle cx="12" cy="5" r="1" />
            </svg>
          </div>
        </div>
        <ul className=" text-white font-poppins font-normal" >
          <li className="mb-4 rounded-lg  text-white py-4 bg-bluegrey active:bg-yellow active:text-bluegrey " >
            <a href="/stock" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaBox className="inline-flex w-4 h-4 mr-2 "></FaBox>
                Stock
              </div>
            </a>
          </li>
          <li className="mb-4 rounded-lg  text-white py-4 bg-bluegrey active:bg-yellow active:text-bluegrey">
            <a href="" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaToolbox className="inline-flex w-4 h-4 mr-2 "></FaToolbox>
                Sparepart
              </div>
            </a>
          </li>
          <li className="mb-4 rounded-lg  text-white py-4 bg-bluegrey active:bg-yellow active:text-bluegrey">
            <a href="" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaMotorcycle className="inline-flex w-4 h-4 mr-2 "></FaMotorcycle>
                Motor
              </div>
            </a>
          </li>
          <li className="mb-4 rounded-lg  text-white py-4 bg-bluegrey active:bg-yellow active:text-bluegrey">
            <a href="" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaTools className="inline-flex w-4 h-4 mr-2 "></FaTools>
                Pekerjaan
              </div>
            </a>
          </li>
          <li className="mb-4 rounded-lg  text-white py-4 bg-bluegrey active:bg-yellow active:text-bluegrey">
            <a href="" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaUserCog className="inline-flex w-4 h-4 mr-2 "></FaUserCog>
                Jasa
              </div>
            </a>
          </li>
          <li className="mb-4 rounded-lg  text-white py-4 bg-bluegrey active:bg-yellow active:text-bluegrey">
            <a href="" className="flex items-center justify-between px-8">
              <div className="flex items-center">
                <FaUserCircle className="inline-flex w-4 h-4 mr-2 "></FaUserCircle>
                Akun
              </div>
            </a>
          </li>
          <li className="mb-4 rounded-lg text-white py-4 bg-red active:bg-yellow active:text-bluegrey mt-36 ">
            <a href="" className="flex items-center justify-between">
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
