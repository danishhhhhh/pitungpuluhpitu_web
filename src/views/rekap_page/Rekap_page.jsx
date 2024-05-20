import React from "react";
import Navbar from "../../component/Navbar/navbar";

import TableBesarRekap from "../../component/TabelBesar/tabel_besar_rekap";

const RekapPage = () => {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex-grow">
        <Navbar data="Rekap Pengerjaan Tim 1" showBackButton={true} />
        <div className="p-12 flex flex-row justify-start">
          <div className="w-3/5">
            <TableBesarRekap />
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default RekapPage;
