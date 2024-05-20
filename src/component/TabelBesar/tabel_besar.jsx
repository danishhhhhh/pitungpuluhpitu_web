import React, { useState } from 'react';

const TableBesar = ({ spareparts, setSpareparts }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editNama, setEditNama] = useState('');
    const [editKategori, setEditKategori] = useState('');

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditNama(spareparts[index].nama);
        setEditKategori(spareparts[index].kategori);
        toggleEditModal();
    };

    const handleUpdateSparepart = () => {
        const updatedSparepart = { nama: editNama, kategori: editKategori };
        const updatedSpareparts = [...spareparts];
        updatedSpareparts[editIndex] = updatedSparepart;
        setSpareparts(updatedSpareparts);
        toggleEditModal();
    };

    const handleChangeEdit = (e) => {
        const { name, value } = e.target;
        if (name === 'editNama') {
            setEditNama(value);
        } else if (name === 'editKategori') {
            setEditKategori(value);
        }
    };

    const handleDeleteClick = (index) => {
        const updatedSpareparts = [...spareparts];
        updatedSpareparts.splice(index, 1);
        setSpareparts(updatedSpareparts);
    };

    return (
        <div className="grid grid-rows-1">
            {/* Tabel */}
            <table className="border-collapse border-gray-300 rounded-lg">
                <thead>
                    <tr className="text-black">
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Nama Sparepart</th>
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Kategori</th>
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {spareparts.map((sparepart, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 font-poppins border border-grey">{sparepart.nama}</td>
                            <td className="px-4 py-2 font-poppins border border-grey">{sparepart.kategori}</td>
                            <td className="px-4 py-2 border border-grey text-center">
                                <button
                                    className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2"
                                    onClick={() => handleEditClick(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red font-poppins font-medium text-sm text-white px-4 py-1.5 rounded-md mr-2"
                                    onClick={() => handleDeleteClick(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Edit */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>
                    <div className="w-[500px] h-[391px] px-[35px] py-[45px] bg-white rounded-[15px] shadow-lg flex-col justify-center items-center gap-[30px] inline-flex relative z-10">
                        <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">Edit Sparepart</div>
                        <div className="self-stretch h-[235px] flex-col justify-center items-center gap-5 flex">
                            <div className="self-stretch h-[164px] flex-col justify-center items-center gap-2.5 flex">
                                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-[5px] flex">
                                    <div className="text-center text-black text-sm font-medium font-['Poppins']">Nama Sparepart</div>
                                    <div className="self-stretch px-[15px] py-4 bg-white rounded-[15px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            name="editNama"
                                            value={editNama}
                                            onChange={handleChangeEdit}
                                            className="w-full focus:outline-none text-black"
                                            placeholder="Edit Nama Sparepart"
                                            style={{
                                                caretColor: 'black',
                                                fontSize: 14,
                                                color: 'black',
                                                backgroundColor: 'transparent',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                                    <div className="text-center text-black text-sm font-medium font-['Poppins']">Kategori</div>
                                    <div className="self-stretch h-[50px] flex-col justify-start items-start gap-2.5 flex">
                                        <div className="self-stretch p-[15px] bg-white rounded-[15px] border border-neutral-300 justify-between items-center inline-flex">
                                            <select
                                                name="editKategori"
                                                value={editKategori}
                                                onChange={handleChangeEdit}
                                                className="w-full text-zinc-900 text-[13px] font-semibold font-['Poppins'] focus:outline-none bg-white border-none"
                                            >
                                                <option value="Lainnya">Lainnya</option>
                                                <option value="Ban">Ban</option>
                                                <option value="Oli">Oli</option>
                                                <option value="Rem">Rem</option>
                                                <option value="Busi">Busi</option>
                                                <option value="Lampu">Lampu</option>
                                                <option value="Aki">Aki</option>
                                                <option value="Rantai">Rantai</option>
                                                <option value="Filter">Filter</option>
                                                <option value="Aksesoris">Aksesoris</option>
                                                <option value="Jok">Jok</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[51px] p-2.5 bg-yellow rounded-[15px] flex-col justify-center items-center gap-2.5 flex">
                                <button
                                    type="button"
                                    className="w-full text-center text-zinc-900 text-sm font-medium font-['Poppins']"
                                    onClick={handleUpdateSparepart}
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableBesar;
