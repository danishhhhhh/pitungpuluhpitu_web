import React, { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaChevronLeft } from "react-icons/fa";
import { Select, Option, Input } from "@material-tailwind/react";
import flatpickr from "flatpickr";

const EditRekappage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const datepicker = flatpickr("#date-picker", {
      dateFormat: "Y-m-d", // Day-Month-Year
    });

    const calendarContainer = datepicker.calendarContainer;
    const calendarMonthNav = datepicker.monthNav;
    const calendarNextMonthNav = datepicker.nextMonthNav;
    const calendarPrevMonthNav = datepicker.prevMonthNav;
    const calendarDaysContainer = datepicker.daysContainer;

    calendarContainer.className = `${calendarContainer.className} bg-white p-4 border border-blue-gray-50 rounded-lg shadow-lg shadow-blue-gray-500/10 font-sans text-sm font-normal text-blue-gray-500 focus:outline-none break-words whitespace-normal`;
    calendarMonthNav.className = `${calendarMonthNav.className} flex items-center justify-between mb-4 [&>div.flatpickr-month]:-translate-y-3`;
    calendarNextMonthNav.className = `${calendarNextMonthNav.className} absolute !top-2.5 !right-1.5 h-6 w-6 bg-transparent hover:bg-blue-gray-50 !p-1 rounded-md transition-colors duration-300`;
    calendarPrevMonthNav.className = `${calendarPrevMonthNav.className} absolute !top-2.5 !left-1.5 h-6 w-6 bg-transparent hover:bg-blue-gray-50 !p-1 rounded-md transition-colors duration-300`;
    calendarDaysContainer.className = `${calendarDaysContainer.className} [&_span.flatpickr-day]:!rounded-md [&_span.flatpickr-day.selected]:!bg-gray-900 [&_span.flatpickr-day.selected]:!border-gray-900`;
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Edit Rekap" showBackButton={true} />
        <div className="w-full p-10 flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="flex-col justify-start items-start gap-[5px] flex">
            <div className="text-slate-800 text-2xl font-semibold font-['Poppins'] leading-7">
              Edit Rekap
            </div>
            <div className="text-gray-600 text-base font-normal font-['Poppins'] leading-7">
              Perbarui rekap pengerjaan di sini.
            </div>
          </div>
          <div className="self-stretch h-[0px] border-grey border"></div>
          <div className="flex flex-col w-full gap-6">
            <div className="w-1/3 font-poppins">
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  id="date-picker"
                  className="peer h-full w-full rounded-[7px] border border-border  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 
                  outline outline-0 transition-all "
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Tanggal
                </label>
              </div>
            </div>
            <div className="w-1/3 font-poppins">
              <Select
                label="Cabang"
                size="lg"
                className="text-sm h-12 font-poppins"
              >
                <Option>Kalisat (Jember)</Option>
                <Option>Kalisat (Jember)</Option>
                <Option>Kalisat (Jember)</Option>
              </Select>
            </div>
            <div className="w-1/3 font-poppins">
              <Select
                label="Mekanik"
                size="lg"
                className="text-sm h-12 font-poppins"
              >
                <Option>Mekanik 1</Option>
                <Option>Mekanik 2</Option>
                <Option>Mekanik 3</Option>
              </Select>
            </div>
            <div className="w-1/3 font-poppins">
              <Input
                color="indigo"
                label="Masukan Plat Motor"
                size="lg"
                className="text-sm h-12 font-poppins"
              />
            </div>
            <div className="w-1/3 font-poppins">
              <Select
                label="Tipe Motor"
                size="lg"
                className="text-sm h-12 font-poppins"
              >
                <Option>Vario</Option>
                <Option>Beat</Option>
                <Option>CBR</Option>
              </Select>
            </div>
            <div className="w-1/3 font-poppins">
              <Select
                label="Tahun"
                size="lg"
                className="text-sm h-12 font-poppins"
              >
                <Option>2022</Option>
                <Option>2021</Option>
                <Option>2020</Option>
              </Select>
            </div>
            <div className="w-1/3 font-poppins">
              <Input
                color="indigo"
                label="Masukan Km Motor"
                size="lg"
                className="text-sm h-12 font-poppins"
              />
            </div>
            <div className="w-1/3 font-poppins">
              <Select
                label="Pekerjaan"
                size="lg"
                className="text-sm h-12 font-poppins"
              >
                <Option>Service Rutin</Option>
                <Option>Ganti Oli</Option>
                <Option>Perbaikan Mesin</Option>
              </Select>
            </div>
            <div className="w-1/3 h-12 py-4 pl-4 pr-2.5 bg-white rounded-lg border border-border justify-between items-center inline-flex">
              <div className="text-center text-bordericon text-sm font-normal font-['Poppins']">
                Jasa
              </div>
              <FaChevronLeft className="w-3 h-3 rotate-180 text-bordericon" />
            </div>
            <div
              className="w-1/3 h-12 py-4 pl-4 pr-2.5 bg-white rounded-lg border  border-border justify-between items-center inline-flex"
              onClick={toggleModal}
            >
              <div className="text-center text-bordericon text-sm font-normal font-['Poppins']">
                Sparepart
              </div>
              <FaChevronLeft className="w-3 h-3 rotate-180 text-bordericon" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          />
          <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/3">
            <div className="w-full flex flex-col justify-start items-center gap-10">
              <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                Sparepart
              </div>
              <div className="w-full flex flex-col justify-start items-center gap-6">
                <div className="w-full px-5 py-2.5 bg-zinc-200 rounded-[10px] flex justify-between items-center">
                  <div className="text-center text-gray-600 text-sm font-normal font-['Poppins']">
                    Cari Sparepart ...
                  </div>
                  <div className="w-[18px] h-[18px] relative" />
                </div>
                <div className="w-full h-64 overflow-y-auto flex flex-col justify-center items-start gap-6">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="w-full flex flex-col gap-5">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex items-start gap-2.5">
                          <div className="text-center text-black text-sm font-medium font-['Poppins']">
                            Ban Depan Vario
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded-xl accent-yellow  mr-2"
                        />
                      </div>
                      <div className="w-full border border-neutral-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-12 bg-yellow-400 rounded-[15px] flex justify-center items-center">
              <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">
                Tambah
              </div>
            </div>
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRekappage;
