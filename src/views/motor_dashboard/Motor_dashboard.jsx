import React from 'react';
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import { IoSearchOutline } from "react-icons/io5";
import './motor.css';
import TableKecil from '../../component/TabelKecil/tabel_kecil';
import TableBesar from '../../component/TabelBesar/tabel_besar';

const MotordashboardPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-1 ">
                <Navbar data="Data Motor" />
                <div className="flex flex-col w-full">
                        {/* <div className="flex mt-20 ml-45 bg-gray-800 mt-20">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari Motor ..."
                                    className="w-96 h-9 md:pl-2 pr-10 bg-lightgrey rounded-xl text-darkgrey focus:outline-none font-poppins text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <IoSearchOutline className="text-gray-400" />
                                </div>
                            </div>
                            <div className="ml-auto flex">
                                <button className="bg-yellow px-5 py-2 rounded-lg text-black font-normal font-poppins text-sm">
                                    Tambah Motor
                                </button>
                                <button className="bg-yellow px-5 py-2 rounded-lg text-black font-normal font-poppins text-sm ml-40">
                                    Tambah Motor
                                </button>
                            </div>
                        </div> */}

                        {/* <div className="flex justify-start bg-gray-800 mt-10">
                            <TableBesar />
                            <TableKecil />
                    </div> */}

                    {/* <div className="max-w-2xl mt-14">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default MotordashboardPage;
