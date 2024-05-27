import React, {useState} from "react";
import "../../App.css";
import DeleteModal from "../Modal/DeleteModal.jsx";
import SparepartModal from "../Modal/SparepartModal.jsx";
import {FaSearch} from "react-icons/fa";

const SparepartMainTable = ({spareparts, setSpareparts }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [editIndex, setEditIndex] = useState(null);
    const [sparepartValue, setSparepartValue] = useState("");
    const [kategoriValue, setKategoriValue] = useState("");
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
        setSparepartValue(spareparts[index].nama);
        setKategoriValue(spareparts[index].kategori);
        toggleEditModal();
    };

    const handleUpdateSparepart = () => {
        const updatedSparepart = {nama: sparepartValue, kategori: kategoriValue};
        const updatedSpareparts = [...spareparts];
        updatedSpareparts[editIndex] = updatedSparepart;
        setSpareparts(updatedSpareparts);
        toggleEditModal();
    };

    const handleChangeEdit = (e) => {
        const {name, value} = e.target;
        if (name === "editNama") {
            setSparepartValue(value);
        } else if (name === "editKategori") {
            setKategoriValue(value);
        }
    };

    const handleDeleteClick = (index) => {
        const updatedSpareparts = [...spareparts];
        updatedSpareparts.splice(index, 1);
        setSpareparts(updatedSpareparts);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setKategoriValue("")
        setSparepartValue("")
    };

    const handleDelete = () => {
        const updatedSpareparts = [...spareparts];
        updatedSpareparts.splice(deleteIndex, 1);
        setSpareparts(updatedSpareparts);
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
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
                    <FaSearch className="my-auto mx-4  text-darkgrey" />
                </div>
                <button
                    className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    onClick={toggleAddModal}
                >
                    Tambah Sparepart
                </button>
            </div>
            <div className="h-6" />
            {/* Tabel */}
            <table className="border-collapse border-gray-300 rounded-lg">
                <thead>
                <tr className="text-black">
                    <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                        Nama Sparepart
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
                {spareparts.map((sparepart, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 font-poppins border border-grey">
                            {sparepart.name}
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

            {/* Add Modal */}
            <SparepartModal
                isEdit={false}
                isOpen={isAddModalOpen}
                handleCloseModal={handleCloseModal}
                sparepartValue={sparepartValue}
                kategoriValue={kategoriValue}
                onChange={handleChangeEdit}
                handleSubmit={handleUpdateSparepart}
            />

            {/* Edit Modal */}
            <SparepartModal
                isEdit={true}
                isOpen={isEditModalOpen}
                handleCloseModal={handleCloseModal}
                sparepartValue={sparepartValue}
                kategoriValue={kategoriValue}
                onChange={handleChangeEdit}
                handleSubmit={handleUpdateSparepart}
            />

            {/* Delete Modal */}
            <DeleteModal
                name={name.toLowerCase()}
                isOpen={isDeleteModalOpen}
                handleCloseModal={handleCloseModal}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default SparepartMainTable;
