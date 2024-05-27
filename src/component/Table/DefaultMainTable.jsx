import React, {useState} from 'react';
import "../../App.css";
import Pagination from "./Pagination.jsx";
import {FaSearch} from "react-icons/fa";
import {IoIosClose} from "react-icons/io";
import DeleteModal from "../Modal/DeleteModal.jsx";
import CommonModal from "../Modal/CommonModal.jsx";

const DefaultMainTable = ({name, data, setData}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [value, setValue] = useState("");

    const [editIndex, setEditIndex] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const toggleAddModal = () => {
        setValue("");
        setIsAddModalOpen(true);
    };

    const toggleEditModal = (index) => {
        setEditIndex(index);
        setValue(data[index].nama);
        setIsEditModalOpen(true);
    };

    const toggleDeleteModal = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };

    const handleUpdateSparepart = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts[editIndex] = {nama: value};
        setData(updatedSpareparts);
        setIsEditModalOpen(false);
    };

    const handleAddSparepart = () => {
        setData([...data, {nama: value}]);
        setIsAddModalOpen(false);
    };

    const handleDelete = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts.splice(deleteIndex, 1);
        setData(updatedSpareparts);
        setIsDeleteModalOpen(false);
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
                    <FaSearch className="my-auto mx-4  text-darkgrey"/>
                </div>
                <button
                    className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    onClick={toggleAddModal}
                >
                    Tambah {name}
                </button>
            </div>
            <div className="h-6"/>
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg">
                    <thead>
                    <tr className="text-black">
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">Nama {name}</th>
                        <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">Action</th>
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
            <div className="h-6"/>
            <Pagination/>

            {/* Add Modal */}
            <CommonModal name={name} isOpen={isAddModalOpen} value={value} setValue={setValue}
                         handleSubmit={handleAddSparepart} handleCloseModal={handleCloseModal} isEdit={false}/>

            {/* Edit Modal */}
            <CommonModal name={name} isOpen={isEditModalOpen} value={value} setValue={setValue}
                         handleSubmit={handleUpdateSparepart} handleCloseModal={handleCloseModal} isEdit={true}/>

            {/* Delete Modal */}
            <DeleteModal name={name.toLowerCase()} isOpen={isDeleteModalOpen} handleCloseModal={handleCloseModal}
                         handleDelete={handleDelete}/>
        </div>
    );
};

export default DefaultMainTable;
