import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const DeleteModal = ({ isOpen, handleCloseModal, handleDelete, name, isActive }) => {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    if (!isOpen) return null;

    const handleDeleteConfirmation = () => {
        setIsConfirmationOpen(true);
    };

    const handleConfirmDelete = () => {
        handleDelete();
        handleCloseModal();
    };

    const confirmationMessage = isActive
        ? `Apakah Anda yakin ingin mengaktifkan ${name} ini?`
        : `Apakah Anda yakin ingin menonaktifkan ${name} ini?`;

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
                        Konfirmasi
                    </div>
                </div>
                <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">
                    {confirmationMessage}
                </div>

                <div className="flex justify-center items-center gap-4">
                    <button
                        type="button"
                        className="w-full text-center text-white text-sm font-medium font-poppins rounded-xl py-3 bg-green"
                        onClick={handleConfirmDelete}
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
