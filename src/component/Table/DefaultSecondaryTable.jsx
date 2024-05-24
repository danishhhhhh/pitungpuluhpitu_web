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

            {/* Add Modal */}
            <CommonModal name={name} isOpen={isTambahModalOpen} value={value} setValue={setValue}
                         handleSubmit={handleTambahKategori} handleCloseModal={handleCloseModal} isEdit={false}/>


            {/* Edit Modal */}
            {/*{isEditModalOpen && (
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
                                    value={value}
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
            )}*/}
            <CommonModal name={name} isOpen={isEditModalOpen} value={value} setValue={setValue}
                         handleSubmit={handleEdit} handleCloseModal={handleCloseModal} isEdit={true}/>

            {/* Delete Modal */}
            <DeleteModal name={name.toLowerCase()} isOpen={isDeleteModalOpen} handleDelete={handleDelete} handleCloseModal={handleCloseModal}/>
        </div>
    );
};
export default DefaultSecondaryTable
