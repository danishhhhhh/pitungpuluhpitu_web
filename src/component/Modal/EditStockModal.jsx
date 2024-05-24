import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { FaMinus, FaPlus } from 'react-icons/fa';

const EditStockModal = ({
                            isEditModalOpen,
                            handleCloseModal,
                            spareparts,
                            editIndex,
                            editStok,
                            decrementStock,
                            incrementStock,
                            handleEdit,
                        }) => {
    if (!isEditModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="absolute inset-0 z-0 bg-black bg-opacity-50"
                onClick={handleCloseModal}
            />
            <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/4">
                <div className="flex flex-col justify-end">
                    <button
                        className="text-zinc-900 flex justify-end"
                        onClick={handleCloseModal}
                    >
                        <IoIosClose className="w-8 h-8 relative" />
                    </button>
                    <div className="text-center text-zinc-900 text-2xl font-semibold font-poppins leading-9">
                        Edit Stok
                    </div>
                </div>
                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-4 flex">
                    <div className="text-center text-black text-base font-medium font-poppins">
                        Ubah stok {spareparts[editIndex].nama}?
                    </div>
                    <div className="self-stretch flex justify-center items-center gap-4">
                        <button
                            className="bg-yellow text-black rounded-xl px-4 py-4"
                            onClick={decrementStock}
                        >
                            <FaMinus className="w-3 h-3" />
                        </button>
                        <div className="px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 text-black text-base font-poppins">
                            {editStok}
                        </div>
                        <button
                            className="bg-yellow text-black rounded-xl px-4 py-4"
                            onClick={incrementStock}
                        >
                            <FaPlus className="w-3 h-3" />
                        </button>
                    </div>
                </div>
                <button
                    type="button"
                    className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
                    onClick={handleEdit}
                >
                    Simpan
                </button>
            </div>
        </div>
    );
};

export default EditStockModal;
