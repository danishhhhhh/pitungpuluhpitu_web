import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { postConfirmRequest } from "../../features/Stock.jsx";

const RekapCard = ({ data,  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    try {
      await postConfirmRequest(true, data.id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleReject = async () => {
    try {
      await postConfirmRequest(false, data.id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full p-5 bg-white rounded-xl border-2 border-grey flex-col gap-2 justify-between inline-flex">
      <div className="flex flex-col w-full gap-3">
        <div className="justify-between flex flex-row items-center">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="w-10 h-10 bg-grey rounded-full" />
            <div className="text-center text-black text-base font-medium font-poppins">
              Danish Ardiyanta
            </div>
          </div>
          <button
            className="px-4 py-2 bg-navy rounded-lg justify-center items-center flex"
            onClick={handleDetailClick}
          >
            <div className="text-center text-white text-xs font-medium font-poppins">
              Detail
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="flex-col justify-start items-start flex">
            <div className="text-black text-md font-medium font-poppins leading-snug">
              Cabang
            </div>
            <div className="text-darkgrey text-sm font-medium font-poppins leading-snug">
              {data.cabang}
            </div>
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="text-black text-md font-medium font-poppins leading-snug">
              Mekanik
            </div>
            <div className="text-darkgrey text-sm font-medium font-poppins leading-snug">
              {data.mekanik}
            </div>
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="text-black text-md font-medium font-poppins leading-snug">
              Plat Motor
            </div>
            <div className="text-darkgrey text-sm font-medium font-poppins leading-snug">
              {data.plat_motor}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-end items-end gap-2.5 inline-flex">
        <button className="w-[34px] h-[34px] bg-lightred rounded-[32px] justify-center items-center gap-2.5 flex" onClick={handleReject}>
          <IoIosClose className="w-8 h-8 text-red" />
        </button>
        <button
          className="w-[34px] h-[34px] bg-lightgreen rounded-[32px] justify-center items-center gap-2.5 flex "
          onClick={handleConfirm}
        >
          <FaCheck className="w-4 h-4 text-green" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          />
          <div className="w-1/4 p-5 bg-white rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex z-10">
            <div className="self-stretch max-h-[80vh] overflow-y-auto flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch justify-between items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="w-10 h-10 bg-grey rounded-full" />
                  <p className="text-center text-black text-base font-medium font-poppins leading-snug">
                    Danish Ardiyanta
                  </p>
                </div>
                <div>
                  <button
                    className="text-zinc-900 flex justify-end"
                    onClick={handleCloseModal}
                  >
                    <IoIosClose className="w-8 h-8 relative" />
                  </button>
                </div>
              </div>
              <div className="self-stretch h-[559px] flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Tanggal
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.tanggal}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Cabang
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.cabang}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Mekanik
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.mekanik}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Plat Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.plat_motor}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Tipe Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.motor}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Tahun Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.tahun}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    KM Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.km_motor}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Pekerjaan
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    {data.pekerjaan}
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Jasa
                  </p>
                  <p className="text-darkgrey text-sm font-normal font-poppins leading-snug">
                  {data.jasa && data.jasa.length > 0 ? data.jasa.join(", ") : "-"}
                  </p>
                </div>
                <div className="self-stretch h-[103px] flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Sparepart
                  </p>
                  <p className="self-stretch text-gray-600 text-sm font-normal font-poppins leading-snug">
                  {data.sparepart && data.sparepart.length > 0 ? data.sparepart.join(", ") : "-"}                  </p>
                </div>
              </div>
              <button
                className="self-center bg-red-500 text-white rounded-lg px-4 py-2"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RekapCard;
