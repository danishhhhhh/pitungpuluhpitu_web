import React from 'react';
import "../../App.css"
import Pagination from "./pagination.jsx";

const TableBesarCabang = () => {
    const spareparts = [
        { nama: 'Kalisat (Jember)'},
        { nama: 'Sumber Wringin (Bondowoso)'},
        { nama: 'Ulamm (Bondowoso)'},
        { nama: 'Bondowoso 2 (Bondowoso 3)'},
    
    ];

    return (
        <div className="grid grid-rows-1 ">
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Cari Cabang ..."
                    className="w-1/2 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
                />
                <button className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm">
                    Tambah Cabang
                </button>
            </div>
            <div className="h-4"/>
            <div className="flex flex-col">
                <table className="border-collapse border-gray-300 rounded-lg">
                    <thead >
                    <tr className="text-black">
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Nama Cabang</th>
                    
                        <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {spareparts.map((sparepart, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 font-poppins border border-grey">{sparepart.nama}</td>
                       
                            <td className="px-4 py-2 border border-grey text-center">
                                <button className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2">Edit</button>
                                <button className="bg-red font-poppins font-medium text-sm text-white px-4 py-1.5 rounded-md mr-2">Hapus</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="h-4"/>
            <Pagination />
        </div>
    );
};

export default TableBesarCabang;