import React from "react";
import Navbar from "../../component/Navbar/navbar";

import TableBesarCabang from "../../component/TabelBesar/tabel_besar_cabang";

const CabangPage = () => {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex-grow">
        <Navbar data="Cabang Tim 1" showBackButton={true}  />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-3/5">
            <TableBesarCabang />
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default CabangPage;
