import * as React from 'react';
import Clock from "../../component/Navbar/clock";
const Navbar = (props) => {
  const { data } = props;
  return (
    <div className="bg-lightyellow w-full h-20 sticky top-0 flex justify-between items-center px-10">
      <h1 className="font-poppins font-semibold text-xl">
        {data}
      </h1>
      <Clock />
    </div>
  );
};

export default Navbar;