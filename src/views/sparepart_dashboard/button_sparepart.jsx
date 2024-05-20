import React from 'react';

const SparepartForm = () => {
    return (
        <div className="w-[500px] h-[391px] px-[35px] py-[45px] bg-white rounded-[15px] shadow flex-col justify-center items-center gap-[30px] inline-flex">
            <div className="text-center text-zinc-900 text-2xl font-semibold font-['Poppins'] leading-9">Tambah Sparepart</div>
            <div className="self-stretch h-[235px] flex-col justify-center items-center gap-5 flex">
                <div className="self-stretch h-[164px] flex-col justify-center items-center gap-2.5 flex">
                    <div className="self-stretch h-[78px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">Nama Sparepart</div>
                        <div className="self-stretch px-[15px] py-4 bg-white rounded-[15px] border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                            <div className="text-zinc-900 text-[13px] font-normal font-['Poppins']">Tambahkan Sparepart</div>
                            <div className="w-[5px] h-6 bg-white" />
                        </div>
                    </div>
                    <div className="self-stretch h-[76px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-center text-black text-sm font-medium font-['Poppins']">Kategori</div>
                        <div className="self-stretch h-[50px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch p-[15px] bg-white rounded-[15px] border border-neutral-300 justify-between items-center inline-flex">
                                <div className="text-center text-zinc-900 text-[13px] font-semibold font-['Poppins']">Lainnya</div>
                                <div className="w-4 h-4 relative origin-top-left -rotate-180" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[51px] p-2.5 bg-yellow-400 rounded-[15px] flex-col justify-center items-center gap-2.5 flex">
                    <div className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">Tambah</div>
                </div>
            </div>
        </div>
    );
};

export default SparepartForm;
