import { useState} from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { FaChevronLeft } from "react-icons/fa";
import {
  Select,
  Option,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import EditSparepartModal from "../../component/Modal/EditSparepartModal.jsx";
import EditSelectSection from "../../component/EditRekap/EditSelectSection.jsx";
import { getJasaRequest, getSearchJasaRequest } from "../../features/Jasa.jsx";
import {
  getSparepartRequest,
  getSearchSparepartRequest, // Import fungsi pencarian
} from "../../features/Sparepart.jsx";

const EditRekappage = () => {
  const [isOpenSparepart, setIsOpenSparepart] = useState(false);
  const [isOpenJasa, setIsOpenJasa] = useState(false);
  const [date, setDate] = useState();
  const [confirmDate, setConfirmDate] = useState();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [jasa, setJasa] = useState([]);
  const [spareparts, setSpareparts] = useState([]);

  const getSparepart = async (page = 1) => {
    try {
      const responseSparepart = await getSparepartRequest(page);

      setSpareparts(responseSparepart.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchSparepart = async (query) => {
    try {
      const responseSparepart = await getSearchSparepartRequest(query);
      setSpareparts(responseSparepart.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getJasa = async () => {
    try {
      const responseJasa = await getJasaRequest(0);

      setJasa(responseJasa.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getSearchJasa = async (query) => {
    try {
      const responseJasa = await getSearchJasaRequest(query);
      setJasa(responseJasa.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const toggleSelectSparepart = () => {
    setIsOpenSparepart(!isOpenSparepart);
    getSparepart();
    setIsOpenJasa(false);
  };

  const toggleSelectJasa = () => {
    setIsOpenJasa(!isOpenJasa);
    getJasa();
    setIsOpenSparepart(false);
  };

  const handleDayClick = (day) => {
    setDate(day);
  };

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const handleConfirm = () => {
    setConfirmDate(date);
    setPopoverOpen(false);
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
          <div className="self-stretch border-grey border" />
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-1/2 gap-6">
              <div className="w-2/3 font-poppins">
                <Popover
                  placement="bottom"
                  open={popoverOpen}
                  handler={togglePopover}
                >
                  <PopoverHandler>
                    <Input
                      label="Select a Date"
                      size="lg"
                      onChange={() => null}
                      value={
                        confirmDate
                          ? confirmDate.toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          : ""
                      }
                      readOnly
                    />
                  </PopoverHandler>
                  <PopoverContent>
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      onDayClick={handleDayClick}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption:
                          "flex justify-center py-2 mb-4 relative items-center",
                        caption_label: "text-sm font-medium text-gray-900",
                        nav: "flex items-center",
                        nav_button:
                          "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected:
                          "rounded-md bg-navy text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside:
                          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <ChevronLeftIcon
                            {...props}
                            className="h-4 w-4 stroke-2"
                          />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRightIcon
                            {...props}
                            className="h-4 w-4 stroke-2"
                          />
                        ),
                      }}
                    />
                    <button
                      onClick={handleConfirm}
                      className="rounded-md bg-navy text-white font-poppins px-2 py-1 mt-3"
                    >
                      Confirm
                    </button>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-2/3 font-poppins">
                <Select label="Cabang" size="lg" className="font-poppins">
                  <Option className="font-poppins">Kalisat (Jember)</Option>
                </Select>
              </div>
              <div className="w-2/3 font-poppins">
                <Select label="Mekanik" size="lg" className="font-poppins">
                  <Option className="font-poppins">Mekanik 1</Option>
                  <Option className="font-poppins">Mekanik 2</Option>
                  <Option className="font-poppins">Mekanik 3</Option>
                </Select>
              </div>
              <div className="w-2/3 font-poppins">
                <Input
                  label="Masukan Plat Motor"
                  size="lg"
                  className="font-poppins"
                />
              </div>
              <div className="w-2/3 font-poppins">
                <Select label="Tipe Motor" size="lg" className="font-poppins">
                  <Option className="font-poppins">Vario</Option>
                </Select>
              </div>
              <div className="w-2/3 font-poppins">
                <Select label="Tahun" size="lg" className="ont-poppins">
                  <Option className="font-poppins">2022</Option>
                </Select>
              </div>
              <div className="w-2/3 font-poppins">
                <Input
                  label="Masukan Km Motor"
                  size="lg"
                  className="font-poppins"
                />
              </div>
              <div className="w-2/3 font-poppins">
                <Select label="Pekerjaan" size="lg" className="font-poppins">
                  <Option className="font-poppins">Service Rutin</Option>
                </Select>
              </div>
              <div
                className="w-2/3 h-11 py-4 pl-4 pr-2.5 bg-white rounded-lg border  border-border justify-between items-center inline-flex"
                onClick={toggleSelectJasa}
              >
                <div className="text-center text-bordericon text-sm font-normal font-['Poppins']">
                  Jasa
                </div>
                <FaChevronLeft className="w-3 h-3 rotate-180 text-bordericon" />
              </div>
              <div
                className="w-2/3 h-11 py-4 pl-4 pr-2.5 bg-white rounded-lg border  border-border justify-between items-center inline-flex"
                onClick={toggleSelectSparepart}
              >
                <div className="text-center text-bordericon text-sm font-normal font-['Poppins']">
                  Sparepart
                </div>
                <FaChevronLeft className="w-3 h-3 rotate-180 text-bordericon" />
              </div>
            </div>
            <EditSelectSection
              isOpen={isOpenJasa}
              name={"Jasa"}
              data={jasa}
              setData={setJasa}
              handleSearch={getSearchJasa}
            />
            <EditSelectSection
              isOpen={isOpenSparepart}
              name={"Sparepart"}
              data={spareparts}
              setData={setSpareparts}
              handleSearch={getSearchSparepart}
            />
          </div>
        </div>
      </div>
      {/* <EditSparepartModal
        isOpen={isOpenSparepart}
        handleCloseModal={handleCloseModal}
      /> */}
    </div>
  );
};

export default EditRekappage;
