import React from 'react'
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import TableBesarDetail from "../../component/TabelBesar/tabel_besar_detail";
import TableKecilDetail from '../../component/TabelKecil/tabel_kecil_detail';

const DetailtimPage = () => {
  return (
    <div className='min-h-screen flex flex-row'>
         <Sidebar/>
         <div className="flex-grow">
                <Navbar data="Detail Tim 1" showBackButton={true}/>
                <div className="p-12 flex flex-row">
                    <div className="w-3/5">
                        <TableBesarDetail/>
                    </div>
                    <div className="w-8"/>
                    <div className="w-2/6">
                        <TableKecilDetail/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DetailtimPage
