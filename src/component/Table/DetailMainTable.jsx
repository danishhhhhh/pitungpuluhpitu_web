import React, { useState, useContext } from "react";
import "../../App.css";
import DeleteModal from "../Modal/DeleteModal.jsx";
import EditStockModal from "../Modal/EditStockModal.jsx";
import SparepartModal from "../Modal/SparepartModal.jsx";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination.jsx";
import { TimContext } from "../../context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../component/debounce/Debounce.jsx";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableBesarDetail = ({
  data,
  setData,
  currentPage,
  totalPage,
  totalData,
  setCurrentPage,
  timId,
  handleEditStock,
  handleSearch,
}) => {
  const { setTimId } = useContext(TimContext);
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [index, setIndex] = useState();
  const [stock, setStock] = useState();
  const [name, setName] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCabangClick = (event) => {
    event.preventDefault();
    setTimId(timId);
    navigate("/cabang");
  };

  const handleRekapClick = (event) => {
    event.preventDefault();
    setTimId(timId);
    navigate("/rekap");
  };

  const toggleEditModal = (id) => {
    setIndex(data[id].id);
    setName(data[id].sparepart);
    setStock(data[id].quantity);
    setIsEditModalOpen(true);
  };

  const handleEdit = () => {
    console.log(index);
    console.log(name);
    console.log(stock);
    handleEditStock(stock, index);
    notifEditSuccess();
    setIsEditModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const notifEditSuccess = () =>
    toast.success("Data berhasil diedit", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "font-poppins",
    });

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    handleSearch(query);
  }, 1500);

  return (
    <div className="grid grid-rows-1">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/2">
          <input
            type="text"
            placeholder={`Cari sparepart ...`}
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
            onChange={handleSearchInputChange}
            value={searchQuery}
          />
          <FaSearch className="my-auto mx-4 text-darkgrey" />
        </div>
        <div className="flex flex-row gap-4">
          <a
            onClick={handleCabangClick}
            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          >
            Cabang
          </a>
          <a
            onClick={handleRekapClick}
            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          >
            Rekap Pengerjaan
          </a>
        </div>
      </div>
      <div className="h-6" />
      {/* Table */}
      <table className="border-collapse border-gray-300 rounded-lg">
        <thead>
          <tr className="text-black">
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Nama Sparepart
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Stok
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Kategori
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((sparepart, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.sparepart}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.quantity}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.kategori ?? "Lainnya"}
              </td>
              <td className="px-4 py-2 border border-grey text-center">
                <button
                  className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2"
                  onClick={() => toggleEditModal(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        totalData={totalData}
        setCurrentPage={setCurrentPage}
      />

      {/* Edit Modal */}
      <EditStockModal
        handleCloseModal={handleCloseModal}
        isOpen={isEditModalOpen}
        stock={stock}
        setStock={setStock}
        name={name}
        handleSubmit={handleEdit}
      />
    </div>
  );
};

export default TableBesarDetail;
