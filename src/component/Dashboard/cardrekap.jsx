import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Cardrekap = () => {
  return (
    <div className="w-[400px] h-[255px] p-5 bg-white rounded-xl border-2 border-grey flex-col justify-start items-start gap-2.5 inline-flex ">
    <div className="self-stretch h-[171px] flex-col justify-start items-start gap-2.5 flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <div className="w-10 h-10 bg-grey rounded-full" />
          <div className="text-center text-black text-base font-medium font-['Poppins'] leading-snug">
            Danish Ardiyanta
          </div>
        </div>
        <button className="px-4 py-2 bg-navy rounded-lg justify-center items-center flex">
          <div className="text-center text-white text-xs font-medium font-['Poppins'] leading-snug" href=''>
            Detail
          </div>
        </button>
      </div>
      <div className="self-stretch h-[121px] flex-col justify-start items-start gap-[5px] flex">
        <div className="flex-col justify-start items-start flex">
          <div className="text-black text-sm font-medium font-['Poppins'] leading-snug">
            Cabang
          </div>
          <div className="text-darkgrey text-[10px] font-medium font-['Poppins'] leading-snug">
            Sumber Wringin (Bondowoso)
          </div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="text-black text-sm font-medium font-['Poppins'] leading-snug">
            Mekanik
          </div>
          <div className="text-darkgrey text-[10px] font-medium font-['Poppins'] leading-snug">
            Danish Ardiyanta
          </div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="text-black text-sm font-medium font-['Poppins'] leading-snug">
            Plat Motor
          </div>
          <div className="text-darkgrey text-[10px] font-medium font-['Poppins'] leading-snug">
            H 1234 KT
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch justify-end items-end gap-2.5 inline-flex">
      <button className="w-[34px] h-[34px] bg-lightred rounded-[32px] justify-center items-center gap-2.5 flex">
        <IoIosClose className="w-8 h-8 relative text-red" />
      </button>
      <button className="w-[34px] h-[34px] bg-lightgreen rounded-[32px] justify-center items-center gap-2.5 flex">
        <div className="w-4 h-4 relative">
         <FaCheck className="w-4 h-4 left-0 top-0 absolute text-green"/>
        </div>
      </button>
    </div>
  </div>
  )
}

export default Cardrekap
