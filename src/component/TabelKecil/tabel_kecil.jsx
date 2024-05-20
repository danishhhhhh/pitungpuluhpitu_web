import React, {useState} from 'react';
import "../../App.css";

const TableBesar = () => {
    const [spareparts, setSpareparts] = useState([
        {nama: 'Badri'},
        {nama: 'Badri'},
        {nama: 'Badri'},
        {nama: 'Badri'},
    ]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editNama, setEditNama] = useState('');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isTambahModalOpen, setIsTambahModalOpen] = useState(false);
    const [kategoriBaru, setKategoriBaru] = useState('');

    const toggleEditModal = (index) => {
        setIsEditModalOpen(true);
        setEditIndex(index);
        setEditNama(spareparts[index].nama);
    };

    const handleEdit = () => {
        const updatedSpareparts = [...spareparts];
        updatedSpareparts[editIndex] = {nama: editNama};
        setSpareparts(updatedSpareparts);
        setIsEditModalOpen(false);
        setEditIndex(null);
        setEditNama('');
    };

    const toggleDeleteModal = (index) => {
        setIsDeleteModalOpen(true);
        setDeleteIndex(index);
    };

    const handleDelete = () => {
        const updatedSpareparts = [...spareparts];
        updatedSpareparts.splice(deleteIndex, 1);
        setSpareparts(updatedSpareparts);
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };

    const toggleTambahModal = () => {
        setIsTambahModalOpen(!isTambahModalOpen);
        setKategoriBaru('');
    };

    const handleChangeKategori = (e) => {
        setKategoriBaru(e.target.value);
    };

    const handleTambahKategori = () => {
        if (kategoriBaru.trim() !== '') {
            const newSparepart = {nama: 'Badri', kategori: kategoriBaru}; // Ganti 'Badri' dengan nilai default yang sesuai
            setSpareparts([...spareparts, newSparepart]);
            setIsTambahModalOpen(false);
            setKategoriBaru('');
        }
    };

    return (
        <div className="grid grid-rows-1 ">
            <div className="flex justify-end items-center">
                <button
                    className="ml-4 bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                    onClick={toggleTambahModal}
                >
                    Tambah Mekanik
                </button>
            </div>
            <div className="h-4"/>
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg">
                    <thead>
                    <tr className="text-black">
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Nama
                            Mekanik
                        </th>
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {spareparts.map((sparepart, index) => (
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
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

                    <div
                        className="w-[500px] h-[300px] px-[35px] py-[45px] bg-white rounded-[15px] shadow-lg flex-col justify-center items-center gap-[30px] inline-flex relative z-10">
                        <div
                            className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">Edit
                            Mekanik
                        </div>
                        <div className="self-stretch h-[150px] flex-col justify-center items-center gap-5 flex">
                            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                                <div className="text-center text-black text-sm font-medium font-['Poppins']">Nama
                                    Mekanik
                                </div>
                                <div
                                    className="self-stretch px-[15px] py-4 bg-white rounded-[15px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                    <input
                                        type="text"
                                        value={editNama}
                                        onChange={(e) => setEditNama(e.target.value)}
                                        className="w-full focus:outline-none text-black"
                                        placeholder="Edit Nama Mekanik"
                                        style={{
                                            caretColor: 'black',
                                            fontSize: 14,
                                            color: 'black',
                                            backgroundColor: 'transparent',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[51px] p-2.5 bg-yellow rounded-[15px] flex-col justify-center items-center gap-2.5 flex">
                            <button
                                type="button"
                                className="w-full text-center text-zinc-900 text-sm font-medium font-['Poppins']"
                                onClick={handleEdit}
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

                    <div
                        className="w-[400px] h-[200px] px-[35px] py-[45px] bg-white rounded-[15px] shadow-lg flex-col justify-center items-center gap-[30px] inline-flex relative z-10">
                        <div
                            className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">Konfirmasi
                            Hapus
                        </div>
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">
                            Apakah Anda yakin ingin menghapus mekanik ini?
                        </div>
                        <div
                            className="self-stretch h-[51px] p-2.5 bg-red rounded-[15px] flex-col justify-center items-center gap-2.5 flex">
                            <button
                                type="button"
                                className="w-full text-center text-white text-sm font-medium font-['Poppins']"
                                onClick={handleDelete}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tambah Kategori Modal */}
            {isTambahModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

                    <div
                        className="w-[500px] h-[300px] px-[35px] py-[45px] bg-white rounded-[15px] shadow-lg flex-col justify-center items-center gap-[30px] inline-flex relative z-10">
                        <div
                            className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">Tambah
                            Mekanik
                        </div>
                        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-center text-black text-sm font-medium font-['Poppins']">Nama Mekanik
                            </div>
                            <div
                                className="self-stretch px-[15px] py-4 bg-white rounded-[15px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    value={kategoriBaru}
                                    onChange={handleChangeKategori}
                                    className="w-full focus:outline-none text-black"
                                    placeholder="Tambahkan Mekanik"
                                    style={{
                                        caretColor: 'black',
                                        fontSize: 14,
                                        color: 'black',
                                        backgroundColor: 'transparent',
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="self-stretch h-[51px] p-2.5 bg-yellow rounded-[15px] flex-col justify-center items-center gap-2.5 flex">
                            <button
                                type="button"
                                className="w-full text-center text-zinc-900 text-sm font-medium font-['Poppins']"
                                onClick={handleTambahKategori}
                            >
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default TableBesar;
