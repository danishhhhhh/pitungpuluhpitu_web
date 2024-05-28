import React, { useState } from "react";
import "../../App.css";
import DeleteModal from "../Modal/DeleteModal.jsx";
import EditStockModal from "../Modal/EditStockModal.jsx";
import SparepartModal from "../Modal/SparepartModal.jsx";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination.jsx";

const TableBesarDetail = ({ name, data, setData, currentPage, totalPage, totalData, setCurrentPage }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [editIndex, setEditIndex] = useState(null);
  const [sparepartValue, setSparepartValue] = useState({
    name: "",
    stok: 0,
    kategori: "",
  });
  const [deleteIndex, setDeleteIndex] = useState(null);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = (index) => {
    setIsDeleteModalOpen(true);
    setDeleteIndex(index);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setSparepartValue(data[index]);
    toggleEditModal();
  };

  const handleUpdateSparepart = () => {
    const updatedSparepart = { ...sparepartValue };
    const updatedData = [...data];
    updatedData[editIndex] = updatedSparepart;
    setData(updatedData);
    toggleEditModal();
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setSparepartValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteClick = () => {
    const updatedData = [...data];
    updatedData.splice(deleteIndex, 1);
    setData(updatedData);
    setIsDeleteModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSparepartValue({ nama: "", stok: 0, kategori: "" });
  };

  return (
    <div className="grid grid-rows-1">
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/2">
          <input
            type="text"
            placeholder="Cari sparepart ..."
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
          />
          <FaSearch className="my-auto mx-4 text-darkgrey" />
        </div>
        <div className="flex flex-row gap-4">
          <button
            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
            onClick={toggleAddModal}
          >
            Tambah Sparepart
          </button>
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
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red font-poppins font-medium text-sm text-white px-4 py-1.5 rounded-md mr-2"
                  onClick={() => toggleDeleteModal(index)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPage={totalPage} totalData={totalData} setCurrentPage={setCurrentPage}/>

      {/* Add Modal */}
      <SparepartModal
        isEdit={false}
        isOpen={isAddModalOpen}
        handleCloseModal={handleCloseModal}
        sparepartValue={sparepartValue}
        onChange={handleChangeEdit}
        handleSubmit={handleUpdateSparepart}
      />

      {/* Edit Modal */}
      <SparepartModal
        isEdit={true}
        isOpen={isEditModalOpen}
        handleCloseModal={handleCloseModal}
        sparepartValue={sparepartValue}
        onChange={handleChangeEdit}
        handleSubmit={handleUpdateSparepart}
      />

      {/* Delete Modal */}
      <DeleteModal
        name="sparepart"
        isOpen={isDeleteModalOpen}
        handleCloseModal={handleCloseModal}
        handleDelete={handleDeleteClick}
      />
    </div>
  );
};

export default TableBesarDetail;
