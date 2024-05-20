import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Clock from "../../component/Navbar/clock";

const Navbar = ({ data, showBackButton }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="bg-lightyellow w-full h-20 sticky top-0 flex justify-between items-center px-10">
      <div className="flex gap-4">
        {showBackButton && (
          <button onClick={handleBack} className="btn-back">
            <FaChevronLeft className="w-5 h-5"/>
          </button>
        )}
        <h1 className="font-poppins font-semibold text-xl">{data}</h1>
      </div>

      <Clock />
    </div>
  );
};

export default Navbar;
