import React from "react";
import Clock from "../../component/Navbar/clock"

const Navbar = () => {
  return (
    <div className="bg-lightyellow w-full h-20 fixed top-0 left-80 flex justify-start items-center">
      <div className="mx-12 my-6">
        <h1 className="font-poppins text-left font-semibold text-xl">Data Sparepart</h1>
      </div>
      <div className="w-80 ml-80"></div>
      <div className=" ml-32"></div>
      <div className="flex justify-end ml-80 ">
        <Clock />
      </div>
    </div>
  );
};

export default Navbar;
