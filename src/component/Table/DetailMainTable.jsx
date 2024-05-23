import React, { useState } from "react";
import "../../App.css";
import Pagination from "./pagination.jsx";
import { FaSearch,FaMinus,FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const TableBesarDetail = () => {
    const [spareparts, setSpareparts] = useState([
        { nama: "Ban Tubeless Belakang Matic", kategori: "Ban", stok: 20 },
        { nama: "Oli Mesin", kategori: "Oli", stok: 12 },
        { nama: "Kampas Rem", kategori: "Rem", stok: 19 },
        { nama: "Busi", kategori: "Busi", stok: 18 },
        { nama: "Lampu LED Depan", kategori: "Lampu", stok: 17 },
        { nama: "Aki", kategori: "Aki", stok: 21 },
        { nama: "Gear Set", kategori: "Rantai", stok: 23 },
        { nama: "Filter Udara", kategori: "Filter", stok: 22 },
        { nama: "Spion", kategori: "Aksesoris", stok: 2 },
        { nama: "Jok", kategori: "Jok", stok: 10 },
    ]);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editStok, setEditStok] = useState(0);

    const toggleEditModal = (index) => {
        setEditIndex(index);
        setEditStok(spareparts[index].stok);
        setIsEditModalOpen(true);
    };

    const handleEdit = () => {
        const updatedSpareparts = [...spareparts];
        updatedSpareparts[editIndex] = {
            ...updatedSpareparts[editIndex],
            stok: editStok,
        };
        setSpareparts(updatedSpareparts);
        setIsEditModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
    };

    const incrementStock = () => setEditStok((prevStok) => prevStok + 1);
    const decrementStock = () => setEditStok((prevStok) => (prevStok > 0 ? prevStok - 1 : 0));

    return (
        <div className="grid grid-rows-1 ">
            <div className="flex justify-between items-center">
                <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/2">
                    <input
                        type="text"
                        placeholder="Cari sparepart ..."
                        className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                    />
                    <FaSearch className="my-auto mx-4  text-darkgrey" />
                </div>
                <div className="flex flex-row gap-4">
                    <a
                        href="/cabang"
                        className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    >
                        Cabang
                    </a>

                    <a
                        href="/rekap"
                        className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    >
                        Rekap Pengerjaan
                    </a>
                </div>
            </div>
            <div className="h-6" />
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg ">
                    <thead>
                    <tr className="text-black">
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                            Nama Sparepart
                        </th>
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                            Stok
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
                                {sparepart.stok}
                            </td>
                            <td className="px-4 py-2 font-poppins border border-grey">
                                {sparepart.kategori}
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
            </div>
            <div className="h-6" />
            <Pagination />

            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
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
                            <div className="text-center text-zinc-900 text-2xl font-semibold font-poppins leading-9">
                                Edit Stok
                            </div>
                        </div>
                        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-4 flex">
                            <div className="text-center text-black text-base font-medium font-poppins">
                                Ubah stok {spareparts[editIndex].nama}?
                            </div>
                            <div className="self-stretch flex justify-center items-center gap-4">
                                <button
                                    className="bg-yellow text-black rounded-xl px-4 py-4 "
                                    onClick={decrementStock}
                                >
                                    <FaMinus className="w-3 h-3" />
                                </button>
                                <div className="px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 text-black text-base font-poppins">
                                    {editStok}
                                </div>
                                <button
                                    className="bg-yellow text-black rounded-xl px-4 py-4 "
                                    onClick={incrementStock}
                                >
                                    <FaPlus className="w-3 h-3" />

                                </button>
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
        </div>
    );
};

export default TableBesarDetail;
