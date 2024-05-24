import React, {useState} from "react";
import "../../App.css";
// import Pagination from "../TabelBesar/pagination.jsx    ";
import {IoIosClose} from "react-icons/io";
import DeleteModal from "../Modal/DeleteModal.jsx";
import EditSparepartModal from "../Modal/EditSparepartModal.jsx";

const SparepartMainTable = ({spareparts, setSpareparts, columns}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [editIndex, setEditIndex] = useState(null);
    const [editNama, setEditNama] = useState("");
    const [editKategori, setEditKategori] = useState("");
    const [deleteIndex, setDeleteIndex] = useState(null);

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };

    const toggleDeleteModal = (index) => {
        setIsDeleteModalOpen(true);
        setDeleteIndex(index);
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditNama(spareparts[index].nama);
        setEditKategori(spareparts[index].kategori);
        toggleEditModal();
    };

    const handleUpdateSparepart = () => {
        const updatedSparepart = {nama: editNama, kategori: editKategori};
        const updatedSpareparts = [...spareparts];
        updatedSpareparts[editIndex] = updatedSparepart;
        setSpareparts(updatedSpareparts);
        toggleEditModal();
    };

    const handleChangeEdit = (e) => {
        const {name, value} = e.target;
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

    return (
        <div className="grid grid-rows-1">
            {/* Tabel */}
            <table className="border-collapse border-gray-300 rounded-lg">
                <thead>
                <tr className="text-black">
                    {columns.map((column, index) => (
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                            {column}
                        </th>
                    ))}
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

            {/* Edit Modal */}
            <EditSparepartModal
                isEditModalOpen={isEditModalOpen}
                handleCloseModal={handleCloseModal}
                editNama={editNama}
                handleChangeEdit={handleChangeEdit}
                editKategori={editKategori}
                handleUpdateSparepart={handleUpdateSparepart}
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
