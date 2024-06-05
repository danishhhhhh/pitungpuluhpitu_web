import React from 'react';

const EditSparepartModal = ({ isOpen, handleCloseModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="absolute inset-0 z-0 bg-black bg-opacity-50"
                onClick={handleCloseModal}
            />
            <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/3">
                <div className="w-full flex flex-col justify-start items-center gap-10">
                    <div
                        className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                        Sparepart
                    </div>
                    <div className="w-full flex flex-col justify-start items-center gap-6">
                        <div
                            className="w-full px-5 py-2.5 bg-zinc-200 rounded-[10px] flex justify-between items-center">
                            <div className="text-center text-gray-600 text-sm font-normal font-['Poppins']">
                                Cari Sparepart ...
                            </div>
                            <div className="w-[18px] h-[18px] relative"/>
                        </div>
                        <div
                            className="w-full h-64 overflow-y-auto flex flex-col justify-center items-start gap-6">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="w-full flex flex-col gap-5">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="flex items-start gap-2.5">
                                            <div
                                                className="text-center text-black text-sm font-medium font-['Poppins']">
                                                Ban Depan Vario
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 rounded-xl accent-yellow mr-2"
                                        />
                                    </div>
                                    <div className="w-full border border-neutral-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-12 bg-yellow-400 rounded-[15px] flex justify-center items-center">
                    <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">
                        Tambah
                    </div>
                </div>
                <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-gray-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default EditSparepartModal;
