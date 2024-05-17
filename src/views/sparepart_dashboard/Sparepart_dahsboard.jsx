import React from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import "./sparepart.css";
import TableKecil from "../../component/TabelKecil/tabel_kecil";
import TableBesar from "../../component/TabelBesar/tabel_besar";

const SparepartdashboardPage = () => {

    return (
        <div className="min-h-screen flex flex-row">
            <Sidebar/>
            <div className="flex-grow">
                <Navbar data="Data Sparepart"/>
                <div className="p-12 flex flex-row">
                    <div className="w-3/5">
                        <TableBesar/>
                    </div>
                    <div className="w-8"/>
                    <div className="w-2/6">
                        <TableKecil/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default SparepartdashboardPage;