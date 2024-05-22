import React from 'react';
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

import { FaAngleDoubleRight } from "react-icons/fa";

const Cardtim = (props) => {
  const { tim } = props; 

  return (
    <div>
     <a href='/detail' className="w-[237.68px] h-[187.50px] p-0.5 bg-yellow rounded-[10px] flex-col justify-start items-center gap-0.5 inline-flex mr-4 ">
          <div className="px-[50px] py-[15px] bg-white rounded-lg flex-col justify-start items-center gap-2.5 flex">
            <MdGroups className="w-14 h-14 relative text-yellow" />
            <div className="w-[133.68px] h-[24.75px] text-center text-gray-800 text-xl font-bold font-poppins leading-snug">
             {tim}
            </div>
            <div className="w-[123.76px] h-[24.75px] text-center text-gray-800 text-sm font-medium font-poppins leading-snug">
              Danish Ardiyanta
            </div>
          </div>
          <div className="w-20 py-[5px] justify-between items-center inline-flex">
            <a className="text-center text-gray-800 text-xs font-normal font-['Poppins'] leading-snug flex justify-center w-52" href=''>
              Detail Tim
              <FaAngleDoubleRight className=" ml-1 mt-0.5" />
            </a>
            <div className="w-[12.96px] h-[9px] relative"></div>
          </div>
        </a>
   
    </div>
  );
}

export default Cardtim;
