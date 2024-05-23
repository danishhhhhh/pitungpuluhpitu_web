import React, { useState } from "react";
import "../../App.css";
import { IoIosClose } from "react-icons/io";

const   DefaultSecondaryTable = ({ name, data, setData }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [editIndex, setEditIndex] = useState(null);
    const [editNama, setEditNama] = useState("");
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isTambahModalOpen, setIsTambahModalOpen] = useState(false);
    const [kategoriBaru, setKategoriBaru] = useState("");

    const toggleTambahModal = () => {
        setIsTambahModalOpen(!isTambahModalOpen);
        setKategoriBaru("");
    };

    const toggleEditModal = (index) => {
        setIsEditModalOpen(true);
        setEditIndex(index);
        setEditNama(data[index].nama);
    };

    const toggleDeleteModal = (index) => {
        setIsDeleteModalOpen(true);
        setDeleteIndex(index);
    };

    const handleEdit = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts[editIndex] = { nama: editNama };
        setData(updatedSpareparts);
        setIsEditModalOpen(false);
        setEditIndex(null);
        setEditNama("");
    };

    const handleDelete = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts.splice(deleteIndex, 1);
        setData(updatedSpareparts);
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };

    const handleChangeKategori = (e) => {
        setKategoriBaru(e.target.value);
    };

    const handleTambahKategori = () => {
        if (kategoriBaru.trim() !== "") {
            const newSparepart = { nama: "Badri", kategori: kategoriBaru }; // Ganti 'Badri' dengan nilai default yang sesuai
            setData([...data, newSparepart]);
            setIsTambahModalOpen(false);
            setKategoriBaru("");
        }
    };

    const handleCloseModal = () => {
        setIsTambahModalOpen(false);
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    };

    return (
        <div className="grid grid-rows-1">
            <div className="flex justify-end items-center">
                <button
                    className="ml-4 bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    onClick={toggleTambahModal}
                >
                    Tambah {name}
                </button>
            </div>
            <div className="h-6"/>
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg">
                    <thead>
                    <tr className="text-black">
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                            Nama {name}
                        </th>
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((sparepart, index) => (
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

            {/* Tambah Modal */}
            {isTambahModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div
                        className="absolute inset-0 z-0 bg-black bg-opacity-50"
                        onClick={handleCloseModal}
                    />
                    <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/4">
                        <div className="flex flex-col justify-end">
                            <button
                                className=" text-zinc-900 flex justify-end"
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
                                    value={kategoriBaru}
                                    onChange={handleChangeKategori}
                                    className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                                    placeholder={`Tambahkan ${name}`}
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
                            onClick={handleTambahKategori}
                        >
                            Tambah
                        </button>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div
                        className="absolute inset-0 z-0 bg-black bg-opacity-50"
                        onClick={() => setIsEditModalOpen(false)}
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
                            onClick={handleEdit}
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div
                        className="absolute inset-0 z-0 bg-black bg-opacity-50"
                        onClick={() => setIsDeleteModalOpen(false)}
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
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">
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
export default DefaultSecondaryTable
