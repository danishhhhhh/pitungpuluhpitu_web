import React from 'react';

const TableKecil = () => {
    const spareparts = [
        { nama: 'Ban Tubeless Belakang Matic' },
        { nama: 'Oli Mesin' },
        { nama: 'Kampas Rem' },
        { nama: 'Busi' },
    ];

    return (
        <div className="ml-4">
            <table className="mt-6 w-full border border-collapse border-gray-300 rounded-2xl overflow-visible">
                <thead className="bg-gray-700 text-black">
                    <tr>
                        <th className="px-32 py-2 font-poppins border border-grey">Nama Sparepart</th>
                        <th className="px-24 py-2 font-poppins border border-grey">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    {spareparts.map((sparepart, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 font-poppins border border-grey">{sparepart.nama}</td>
                            <td className="px-4 py-2 border border-grey">
                                <button className="bg-yellow font-poppins font-medium text-bluegray px-2 py-1 rounded-lg mr-2">Edit</button>
                                <button className="bg-red font-poppins font-medium text-white px-2 py-1 rounded-lg">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableKecil;
