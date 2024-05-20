import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { IoSearchOutline } from "react-icons/io5";
import "./sparepart.css";
import TableKecil from "../../component/TabelKecil/tabel_kecil";
import TableBesar from "../../component/TabelBesar/tabel_besar";
import ButtonSparepart from "../../views/sparepart_dashboard/button_sparepart";

const SparepartdashboardPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-1 ">
                <Navbar data="Data Sparepart" />

                <div className="flex flex-col w-full">
                    <div className="flex mt-20 ml-45 bg-gray-800 ">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari sparepart ..."
                                className="w-96 h-9 md:pl-2 pr-10 bg-lightgrey rounded-xl text-darkgrey focus:outline-none font-poppins text-sm"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <IoSearchOutline className="text-gray-400" />
                            </div>
                        </div>
                        {/* <div className="ml-auto flex">
                            <ButtonSparepart onClick={toggleModal} label="Tambah Sparepart" />
                            <ButtonSparepart onClick={() => { }} label="Tambah Kategori" className="ml-40" />
                        </div> */}
                        <div className="ml-auto flex">
                            <button className="bg-yellow mr-30 px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm">Tambah Sparepart</button>
                            <button className="bg-yellow mr-2  ml-32 px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm">Tambah Kategori</button>
                        </div>
                    </div>


                    <div className="flex justify-start bg-gray-800 mt-10">
                        <TableBesar />
                        <TableKecil />
                    </div>

                    <div className="max-w-2xl mt-14">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px">
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        Previous
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        4
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        5
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white border border-lightgrey text-yellow hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-yellow dark:hover:text-white"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-lg p-8 z-10">
                        <h2 className="text-lg font-semibold">Tambah Sparepart</h2>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SparepartdashboardPage;
