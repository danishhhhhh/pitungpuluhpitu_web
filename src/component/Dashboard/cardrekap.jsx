import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Cardrekap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-[400px] h-[255px] p-5 bg-white rounded-xl border-2 border-grey flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[171px] flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="w-10 h-10 bg-grey rounded-full" />
              <div className="text-center text-black text-base font-medium font-poppins leading-snug">
                Danish Ardiyanta
              </div>
            </div>
            <button
              className="px-4 py-2 bg-navy rounded-lg justify-center items-center flex"
              onClick={handleDetailClick}
            >
              <div className="text-center text-white text-xs font-medium font-poppins leading-snug">
                Detail
              </div>
            </button>
          </div>
          <div className="self-stretch h-[121px] flex-col justify-start items-start gap-[5px] flex">
            <div className="flex-col justify-start items-start flex">
              <div className="text-black text-sm font-medium font-poppins leading-snug">
                Cabang
              </div>
              <div className="text-darkgrey text-[10px] font-medium font-poppins leading-snug">
                Sumber Wringin (Bondowoso)
              </div>
            </div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-black text-sm font-medium font-poppins leading-snug">
                Mekanik
              </div>
              <div className="text-darkgrey text-[10px] font-medium font-poppins leading-snug">
                Danish Ardiyanta
              </div>
            </div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-black text-sm font-medium font-poppins leading-snug">
                Plat Motor
              </div>
              <div className="text-darkgrey text-[10px] font-medium font-poppins leading-snug">
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
              <FaCheck className="w-4 h-4 left-0 top-0 absolute text-green" />
            </div>
          </button>
        </div>
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
                    Cabang
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    Sumber Wringin (Bondowoso)
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Mekanik
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    Danish Ardiyanta
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Plat Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    H 1234 KT
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Tipe Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    Beat
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Tahun Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    2020
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    KM Motor
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    9999999
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Pekerjaan
                  </p>
                  <p className="text-darkgrey text-sm font-medium font-poppins leading-snug">
                    Servis Rutin
                  </p>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Jasa
                  </p>
                  <p className="text-darkgrey text-sm font-normal font-poppins leading-snug">
                    Setting Throttle Position (TP), Stel Velg Belakang
                  </p>
                </div>
                <div className="self-stretch h-[103px] flex-col justify-start items-start flex">
                  <p className="text-black text-base font-medium font-poppins leading-snug">
                    Sparepart
                  </p>
                  <div className="self-stretch text-gray-600 text-sm font-normal font-poppins leading-snug">
                    Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza,
                    Kanvas Rem Belakang Matic, Kanvas Rem Belakang Matic, Ban
                    Tubeless Belakang Matic, Ban Tubeless Belakang Verza, Kanvas
                    Rem Belakang Matic, Ban Tubeless Belakang Matic, Ban
                    Tubeless Belakang Verza, Kanvas Rem Belakang Matic
                  </div>
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
    </>
  );
};

export default Cardrekap;
