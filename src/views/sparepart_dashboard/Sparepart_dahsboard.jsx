import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import "./sparepart.css";
import TableKecil from "../../component/TabelKecil/tabel_kecil";
import TableBesar from "../../component/TabelBesar/tabel_besar";

const SparepartdashboardPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [spareparts, setSpareparts] = useState([
        { nama: 'Ban Tubeless Belakang Matic', kategori: 'Ban' },
        { nama: 'Oli Mesin', kategori: 'Oli' },
        { nama: 'Kampas Rem', kategori: 'Rem' },
        { nama: 'Busi', kategori: 'Busi' },
        { nama: 'Lampu LED Depan', kategori: 'Lampu' },
        { nama: 'Aki', kategori: 'Aki' },
        { nama: 'Gear Set', kategori: 'Rantai' },
        { nama: 'Filter Udara', kategori: 'Filter' },
        { nama: 'Spion', kategori: 'Aksesoris' },
        { nama: 'Jok', kategori: 'Jok' },
    ]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e) => {
        if (e.target.name === 'nama') {
            setNama(e.target.value);
        } else if (e.target.name === 'kategori') {
            setKategori(e.target.value);
        }
    };

    const handleTambahSparepart = () => {
        // Buat objek baru untuk sparepart yang akan ditambahkan
        const newSparepart = { nama, kategori };

        // Perbarui state spareparts dengan menambahkan objek baru
        setSpareparts([...spareparts, newSparepart]);

        // Tutup modal setelah berhasil menambahkan
        toggleModal();
    };

    return (
        <div className="min-h-screen flex flex-row">
            <Sidebar />
            <div className="flex-grow">
                <Navbar data="Data Sparepart" />
                <div className="p-12 flex flex-row">
                    <div className="w-3/5">
                        <TableBesar spareparts={spareparts} onAddSparepartClick={toggleModal} />
                    </div>
                    <div className="w-8" />
                    <div className="w-2/6">
                        <TableKecil />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="w-[500px] h-[391px] px-[35px] py-[45px] bg-white rounded-[15px] shadow flex-col justify-center items-center gap-[30px] inline-flex">
                        <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">Tambah Sparepart</div>
                        <div className="self-stretch h-[235px] flex-col justify-center items-center gap-5 flex">
                            <div className="self-stretch h-[164px] flex-col justify-center items-center gap-2.5 flex">
                                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-[5px] flex">
                                    <div className="text-center text-black text-sm font-medium font-['Poppins']">Nama Sparepart</div>
                                    <div className="self-stretch px-[15px] py-4 bg-white rounded-[15px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            name="nama"
                                            value={nama}
                                            onChange={handleChange}
                                            className="w-full px-3 bg-transparent font-semibold border-none focus:outline-none placeholder-black text-gray-900"
                                            placeholder="Tambahkan Sparepart"
                                            style={{ caretColor: 'black', fontSize: '14px' }}
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                                    <div className="text-center text-black text-sm font-medium font-['Poppins']">Kategori</div>
                                    <div className="self-stretch h-[50px] flex-col justify-start items-start gap-2.5 flex">
                                        <div className="self-stretch p-[15px] bg-white rounded-[15px] border border-neutral-300 justify-between items-center inline-flex">
                                            <select
                                                name="kategori"
                                                value={kategori}
                                                onChange={handleChange}
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
                                    onClick={handleTambahSparepart}
                                >
                                    Tambah
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SparepartdashboardPage;