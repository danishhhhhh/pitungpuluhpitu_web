import React, { useState } from "react";
import "../../App.css";
import { IoIosClose } from "react-icons/io";

const TableKecilDetail = () => {
  const [spareparts, setSpareparts] = useState([
    { nama: "Moh. Dani" },
    { nama: "Dimas Galuh" },
    { nama: "Badri" },
  ]);
  const [isTambahModalOpen, setIsTambahModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editNama, setEditNama] = useState("");
  const [mekanikBaru, setMekanikBaru] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  const toggleTambahModal = () => {
    setIsTambahModalOpen(!isTambahModalOpen);
    setMekanikBaru("");
  };

  const toggleEditModal = (index) => {
    setIsEditModalOpen(true);
    setEditIndex(index);
    setEditNama(spareparts[index].nama);
  };

  const toggleDeleteModal = (index) => {
    setIsDeleteModalOpen(true);
    setDeleteIndex(index);
  };

  const handleTambahMekanik = () => {
    if (mekanikBaru.trim() !== "") {
      setSpareparts([...spareparts, { nama: mekanikBaru }]);
      setIsTambahModalOpen(false);
      setMekanikBaru("");
    }
  };

  const handleEdit = () => {
    const updatedSpareparts = [...spareparts];
    updatedSpareparts[editIndex] = { nama: editNama };
    setSpareparts(updatedSpareparts);
    setIsEditModalOpen(false);
    setEditIndex(null);
    setEditNama("");
  };

  const handleDelete = () => {
    const updatedSpareparts = [...spareparts];
    updatedSpareparts.splice(deleteIndex, 1);
    setSpareparts(updatedSpareparts);
    setIsDeleteModalOpen(false);
    setDeleteIndex(null);
  };

  const handleCloseModal = () => {
    setIsTambahModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="grid grid-rows-1">
      <div className="flex justify-end items-center">
        <button
          className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          onClick={toggleTambahModal}
        >
          Tambah Mekanik
        </button>
      </div>
      <div className="h-4" />
      <div className="flex flex-col">
        <table className="border-collapse border-gray-300 rounded-lg">
          <thead>
            <tr className="text-black">
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Nama Mekanik
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
                <td className="px-4 py-2 border border-grey text-center">
                  <button
                    className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2"
                    onClick={() => toggleEditModal(index)}
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
      </div>

      {/* Tambah Mekanik Modal */}
      {isTambahModalOpen && (
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
                Tambah Mekanik
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
              <div className="text-center text-black text-sm font-medium font-['Poppins']">
                Nama Mekanik
              </div>
              <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  value={mekanikBaru}
                  onChange={(e) => setMekanikBaru(e.target.value)}
                  className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                  placeholder="Tambahkan Mekanik"
                  style={{
                    caretColor: "black",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
              onClick={handleTambahMekanik}
            >
              Tambah
            </button>
          </div>
        </div>
      )}

      {/* Edit Mekanik Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
            onClick={() => setIsEditModalOpen(false)}
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
                Edit Mekanik
              </div>
            </div>
            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
              <div className="text-center text-black text-sm font-medium font-['Poppins']">
                Nama Mekanik
              </div>
              <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                <input
                  type="text"
                  value={editNama}
                  onChange={(e) => setEditNama(e.target.value)}
                  className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                  placeholder="Edit Nama Mekanik"
                  style={{
                    caretColor: "black",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
              onClick={handleEdit}
            >
              Simpan
            </button>
          </div>
        </div>
      )}

      {/* Hapus Mekanik Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            className="absolute inset-0 z-0 bg-black bg-opacity-50"
            onClick={() => setIsDeleteModalOpen(false)}
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
                Konfirmasi Hapus
              </div>
            </div>
            <div className="text-center text-black text-sm font-medium font-['Poppins']">
              Apakah Anda yakin ingin menghapus Mekanik ini?
            </div>
            <button
              type="button"
              className="w-full text-center text-white text-sm font-medium font-poppins rounded-xl py-3 bg-red"
              onClick={handleDelete}
            >
              Hapus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableKecilDetail;
