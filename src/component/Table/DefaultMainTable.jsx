import React, { useState } from 'react';
import "../../App.css";
import Pagination from "./pagination.jsx";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const DefaultMainTable = ({ name, data, setData }) => {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [editNama, setEditNama] = useState("");

    const toggleEditModal = (index) => {
        setEditIndex(index);
        setEditNama(data[index].nama);
        setIsEditModalOpen(true);
    };

    const toggleAddModal = () => {
        setEditNama("");
        setIsAddModalOpen(true);
    };

    const handleUpdateSparepart = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts[editIndex] = { nama: editNama };
        setData(updatedSpareparts);
        setIsEditModalOpen(false);
    };

    const handleAddSparepart = () => {
        setData([...data, { nama: editNama }]);
        setIsAddModalOpen(false);
    };

    const handleDelete = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts.splice(deleteIndex, 1);
        setData(updatedSpareparts);
        setIsDeleteModalOpen(false);
    };

    const toggleDeleteModal = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
        setIsAddModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="grid grid-rows-1 ">
            <div className="flex justify-between items-center">
                <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
                    <input
                        type="text"
                        placeholder={`Cari ${name.toLowerCase()} ...`}
                        className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                    />
                    <FaSearch className="my-auto mx-4  text-darkgrey" />
                </div>
                <button
                    className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    onClick={toggleAddModal}
                >
                    Tambah {name}
                </button>
            </div>
            <div className="h-6" />
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg">
                    <thead>
                    <tr className="text-black">
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Nama {name}</th>
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((sparepart, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 font-poppins border border-grey">{sparepart.nama}</td>
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
            <div className="h-6" />
            <Pagination />

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
                                Edit {name}
                            </div>
                        </div>
                        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-center text-black text-sm font-medium font-['Poppins']">
                                Nama {name}
                            </div>
                            <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    value={editNama}
                                    onChange={(e) => setEditNama(e.target.value)}
                                    className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                                    placeholder={`Edit Nama ${name}`}
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
                            onClick={handleUpdateSparepart}
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Add */}
            {isAddModalOpen && (
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
                                Tambah {name}
                            </div>
                        </div>
                        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-center text-black text-sm font-medium font-['Poppins']">
                                Nama {name}
                            </div>
                            <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    value={editNama}
                                    onChange={(e) => setEditNama(e.target.value)}
                                    className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                                    placeholder={`Tambah Nama ${name}`}
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
                            onClick={handleAddSparepart}
                        >
                            Tambah
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Delete */}
            {isDeleteModalOpen && (
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
                                Konfirmasi Hapus
                            </div>
                        </div>
                        <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">
                            Apakah Anda yakin ingin menghapus {name.toLowerCase()} ini?
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

export default DefaultMainTable;
