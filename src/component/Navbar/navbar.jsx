import React from "react";
import Clock from "../../component/Navbar/clock"

const Navbar = () => {
  return (
    <div className="bg-lightyellow w-full h-20 fixed top-0 2xl:left-80 xl:left-60 flex justify-start items-center">
      <div className="mx-12 my-6">
        <h1 className="font-poppins text-left font-semibold text-xl">Data Sparepart</h1>
      </div>
      <div className="w-80 2xl:w-80 2xl:ml-80 lg:ml-60 lg:w-0 "></div>
      <div className=" ml-32 2xl:ml-32  lg:ml-6"></div>
      <div className="flex justify-end ml-80 ">
        <Clock />
      </div>
    </div>
  );
};

export default Navbar;
