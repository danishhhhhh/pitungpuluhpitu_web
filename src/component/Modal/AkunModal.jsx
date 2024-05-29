import React, {useEffect} from 'react';
import {IoIosClose} from 'react-icons/io';

const AkunModal = ({
                       isEdit,
                       isOpen,
                       handleCloseModal,
                       tim,
                       akunValue,
                       handleInputChange,
                       handleSubmit,
                       setIdTim
                   }) => {

    useEffect(() => {
        console.log(`abc abc ${akunValue.tim}`)
        if (akunValue.tim) {
            const selectedOption = document.querySelector(`option[value="${akunValue.tim}"]`);
            if (selectedOption) {
                setIdTim(selectedOption.getAttribute('tim-id'));
            }
        }
    }, [akunValue.tim]);

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
                        <IoIosClose className="w-8 h-8 relative"/>
                    </button>
                    <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">
                        {isEdit ? 'Edit Akun' : 'Tambah Akun'}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">
                            Nama
                        </div>
                        <div
                            className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                            <input
                                type="text"
                                name="name"
                                value={akunValue.name}
                                onChange={handleInputChange}
                                className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                                placeholder="Masukan nama"
                                style={{
                                    caretColor: "black",
                                    backgroundColor: "transparent",
                                }}
                            />
                        </div>
                    </div>
                    <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">
                            Username
                        </div>
                        <div
                            className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                            <input
                                type="text"
                                name="username"
                                value={akunValue.username}
                                onChange={handleInputChange}
                                className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                                placeholder="Masukan username"
                                style={{
                                    caretColor: "black",
                                    backgroundColor: "transparent",
                                }}
                            />
                        </div>
                    </div>
                    <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">
                            Password
                        </div>
                        <div
                            className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                            <input
                                type="text"
                                name="password"
                                value={akunValue.password}
                                onChange={handleInputChange}
                                className="w-full focus:outline-none text-black text-base font-poppins placeholder:text-sm"
                                placeholder="Masukan password"
                                style={{
                                    caretColor: "black",
                                    backgroundColor: "transparent",
                                }}
                            />
                        </div>
                    </div>
                    <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">
                            Role
                        </div>
                        <div
                            className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                            <select
                                name="role"
                                value={akunValue.role}
                                onChange={handleInputChange}
                                className="w-full text-zinc-900 text-base font-poppins focus:outline-none bg-transparent border-none"
                            >
                                <option value="Owner">Owner</option>
                                <option value="Admin">Admin</option>
                                <option value="Service Advisor">Service Advisor</option>
                            </select>
                        </div>
                    </div>
                    {akunValue.role === 'Service Advisor' && (
                        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-center text-black text-sm font-medium font-['Poppins']">
                                Tim
                            </div>
                            <div
                                className="self-stretch px-[15px] py-3 bg-white rounded-2xl border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                                <select
                                    name="tim"
                                    value={akunValue.tim}
                                    onChange={handleInputChange}
                                    className="w-full text-zinc-900 text-base font-poppins focus:outline-none bg-transparent border-none"
                                >
                                    {tim.map(option => (
                                        <option value={option.name} tim-id={option.id}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    type="button"
                    className="w-full text-center text-zinc-900 text-sm font-medium font-poppins rounded-xl py-3 bg-yellow"
                    onClick={handleSubmit}
                >
                    {isOpen ? 'Simpan' : 'Tambah'}
                </button>
            </div>
        </div>
    );
};

export default AkunModal;
