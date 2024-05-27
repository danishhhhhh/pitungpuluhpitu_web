import React, { useState } from "react";
import "../../App.css";
import { IoIosClose } from "react-icons/io";
import DeleteModal from "../Modal/DeleteModal.jsx";
import CommonModal from "../Modal/CommonModal.jsx";

const DefaultSecondaryTable = ({ name, data, setData }) => {
    const [isTambahModalOpen, setIsTambahModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [value, setValue] = useState("");

    const [editIndex, setEditIndex] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const toggleTambahModal = () => {
        setValue("");
        setIsTambahModalOpen(!isTambahModalOpen);
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

    const handleTambahKategori = () => {
        setData([...data, {nama: value}]);
        setIsTambahModalOpen(false);
    };

    const handleEdit = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts[editIndex] = { nama: value };
        setData(updatedSpareparts);
        setIsEditModalOpen(false);
    };

    const handleDelete = () => {
        const updatedSpareparts = [...data];
        updatedSpareparts.splice(deleteIndex, 1);
        setData(updatedSpareparts);
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
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
                                {sparepart.name}
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

            {/* Add Modal */}
            <CommonModal name={name} isOpen={isTambahModalOpen} value={value} setValue={setValue}
                         handleSubmit={handleTambahKategori} handleCloseModal={handleCloseModal} isEdit={false}/>

            <CommonModal name={name} isOpen={isEditModalOpen} value={value} setValue={setValue}
                         handleSubmit={handleEdit} handleCloseModal={handleCloseModal} isEdit={true}/>

            {/* Delete Modal */}
            <DeleteModal name={name.toLowerCase()} isOpen={isDeleteModalOpen} handleDelete={handleDelete} handleCloseModal={handleCloseModal}/>
        </div>
    );
};
export default DefaultSecondaryTable
