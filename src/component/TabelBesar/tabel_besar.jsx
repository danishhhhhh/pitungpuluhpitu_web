import React, { useState } from "react";
import "../../App.css";
import Pagination from "./pagination.jsx";
import { IoIosClose } from "react-icons/io";

const TableBesar = ({ spareparts, setSpareparts }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editNama, setEditNama] = useState("");
  const [editKategori, setEditKategori] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditNama(spareparts[index].nama);
    setEditKategori(spareparts[index].kategori);
    toggleEditModal();
  };

  const handleUpdateSparepart = () => {
    const updatedSparepart = { nama: editNama, kategori: editKategori };
    const updatedSpareparts = [...spareparts];
    updatedSpareparts[editIndex] = updatedSparepart;
    setSpareparts(updatedSpareparts);
    toggleEditModal();
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    if (name === "editNama") {
      setEditNama(value);
    } else if (name === "editKategori") {
      setEditKategori(value);
    }
  };

  const handleDeleteClick = (index) => {
    const updatedSpareparts = [...spareparts];
    updatedSpareparts.splice(index, 1);
    setSpareparts(updatedSpareparts);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    const updatedSpareparts = [...spareparts];
    updatedSpareparts.splice(deleteIndex, 1);
    setSpareparts(updatedSpareparts);
    setIsDeleteModalOpen(false);
    setDeleteIndex(null);
  };

  const toggleDeleteModal = (index) => {
    setIsDeleteModalOpen(true);
    setDeleteIndex(index);
  };

  return (
    <div className="grid grid-rows-1">
      {/* Tabel */}
      <table className="border-collapse border-gray-300 rounded-lg">
        <thead>
          <tr className="text-black">
            <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
              Nama Sparepart
            </th>
            <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
              Kategori
            </th>
            <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {spareparts.map((sparepart, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.nama}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.kategori}
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
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Edit */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          />
          <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/4">
            <div className="flex flex-col justify-end">
              <button
                className="text-zinc-900 flex justify-end"
                onClick={handleCloseModal}
              >
                <IoIosClose className="w-8 h-8 relative" />
              </button>
              <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                Edit Sparepart
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
              <div className="text-center text-black text-sm font-medium font-['Poppins']">
                Nama Sparepart
              </div>
              <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  name="editNama"
                  value={editNama}
                  onChange={handleChangeEdit}
                  className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                  placeholder="Edit Nama Sparepart"
                  style={{
                    caretColor: "black",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
              <div className="text-center text-black text-sm font-medium font-['Poppins']">
                Kategori
              </div>
              <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                <select
                  name="editKategori"
                  value={editKategori}
                  onChange={handleChangeEdit}
                  className="w-full text-zinc-900 text-base font-poppins focus:outline-none bg-transparent border-none"
                >
                  <option value="Lainnya">Lainnya</option>
                  <option value="Ban">Ban</option>
                  <option value="Oli">Oli</option>
                  <option value="Rem">Rem</option>
                  <option value="Busi">Busi</option>
                  <option value="Lampu">Lampu</option>
                  <option value="Aki">Aki</option>
                  <option value="Rantai">Rantai</option>
                  <option value="Filter">Filter</option>
                  <option value="Aksesoris">Aksesoris</option>
                  <option value="Jok">Jok</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
              onClick={handleUpdateSparepart}
            >
              Simpan
            </button>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/4">
            <div className="flex flex-col justify-end">
              <button
                className=" text-zinc-900 flex justify-end"
                onClick={handleCloseModal}
              >
                <IoIosClose className="w-8 h-8 relative" />
              </button>
              <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                Konfirmasi Hapus
              </div>
            </div>
            <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">
              Apakah Anda yakin ingin menghapus sparepart ini?
            </div>
            <button
              type="button"
              className="w-full text-center text-white text-sm font-medium font-poppins rounded-xl py-3 bg-red"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableBesar;
