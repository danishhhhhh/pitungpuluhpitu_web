import React from "react";
import Clock from "../../component/Navbar/clock";
const Navbar = (props) => {
  const { data } = props; 
  return (
    <div className="bg-lightyellow w-full h-20   fixed top-0 2xl:left-80 left-80 xl:left-60 md:left-60 flex justify-start items-center">
      <div className="ml-10 my-6 flex-initial w-32 basis-1/5">
        <h1 className="font-poppins text-left font-semibold text-xl">
          {data}
        </h1>
      </div>
      <div className=" basis-2/5">

      </div>

      <div className="flex-none flex justify-end basis-1/5">
        <Clock />
      </div>
    </div>
  );
};

export default Navbar;
