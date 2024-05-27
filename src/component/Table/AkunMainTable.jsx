import React, {useState} from "react";
import "../../App.css";
import Pagination from "./Pagination.jsx";
import {FaSearch, FaMinus, FaPlus} from "react-icons/fa";
import {IoIosClose} from "react-icons/io";
import EditStockModal from "../Modal/EditStockModal.jsx";
import AkunModal from "../Modal/AkunModal.jsx";

const TableBesarDetail = () => {
    const [spareparts, setSpareparts] = useState([
        {nama: "Ban Tubeless Belakang Matic", kategori: "Ban", stok: 20},
        {nama: "Oli Mesin", kategori: "Oli", stok: 12},
        {nama: "Kampas Rem", kategori: "Rem", stok: 19},
        {nama: "Busi", kategori: "Busi", stok: 18},
        {nama: "Lampu LED Depan", kategori: "Lampu", stok: 17},
        {nama: "Aki", kategori: "Aki", stok: 21},
        {nama: "Gear Set", kategori: "Rantai", stok: 23},
        {nama: "Filter Udara", kategori: "Filter", stok: 22},
        {nama: "Spion", kategori: "Aksesoris", stok: 2},
        {nama: "Jok", kategori: "Jok", stok: 10},
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
                        placeholder="Cari akun ..."
                        className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                    />
                    <FaSearch className="my-auto mx-4  text-darkgrey"/>
                </div>
                <button
                    className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                >
                    Tambah Akun
                </button>
            </div>
            <div className="h-6"/>
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg ">
                    <thead>
                    <tr className="text-black">
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                            Nama akun
                        </th>
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                            Username
                        </th>
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                            Password
                        </th>
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                            Role
                        </th>
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
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
            <div className="h-6"/>
            <Pagination/>

            {/* Edit Modal */}
            <AkunModal
                isEditModalOpen={isEditModalOpen}
                handleCloseModal={handleCloseModal}
                editNama={editStok}
                handleChangeEdit={handleEdit}
            />
        </div>
    );
};

export default TableBesarDetail;
