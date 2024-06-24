import React from 'react';
import { IoIosClose } from 'react-icons/io';

const DeleteModal = ({ isOpen, handleCloseModal, handleDelete, name }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="absolute inset-0 z-0 bg-black bg-opacity-50"
                onClick={handleCloseModal}
            ></div>
            <div className="p-10 bg-white rounded-2xl flex flex-col gap-8 z-10 w-1/4">
                <div className="flex flex-col justify-end">
                    <button
                        className="text-zinc-900 flex justify-end"
                        onClick={handleCloseModal}
                    >
                        <IoIosClose className="w-8 h-8 relative" />
                    </button>
                    <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                        Konfirmasi Hapus
                    </div>
                </div>
                <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">
                    Apakah Anda yakin ingin menghapus {name} ini?
                </div>
                <button
                    type="button"
                    className="w-full text-center text-white text-sm font-medium font-poppins rounded-xl py-3 bg-red"
                    onClick={handleDelete}
                >
                    Hapus
                </button>
            </div>
        </div>
    );
};

export default DeleteModal;
