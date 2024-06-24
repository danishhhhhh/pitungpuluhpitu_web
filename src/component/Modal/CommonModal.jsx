import React from 'react';
import { IoIosClose } from 'react-icons/io';

const CommonModal = ({ isOpen, handleCloseModal, isEdit, name, value, setValue, handleSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center ">
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
                    <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                        {isEdit ? `Edit ${name}` : `Tambah ${name}`}
                    </div>
                </div>
                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                    <div className="text-center text-black text-sm font-medium font-['Poppins']">
                        Nama {name}
                    </div>
                    <div className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                            placeholder={isEdit ? `Edit Nama ${name}` : `Tambah Nama ${name}`}
                            style={{
                                caretColor: "black",
                                backgroundColor: "transparent",
                            }}
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
                    onClick={handleSubmit}
                >
                    {isEdit ? 'Simpan' : 'Tambah'}
                </button>
            </div>
        </div>
    );
};

export default CommonModal;
