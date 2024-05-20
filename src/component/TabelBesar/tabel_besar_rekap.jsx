import React from "react";
import "../../App.css";
import Pagination from "./pagination.jsx";

const TableBesarRekap = () => {
  const spareparts = [
    {
      NamaCabang: "Kalisat (Jember)",
      namaMekanik: "Moh. Dani",
      platNomor: "K 9998 HB",
      tipeMotor: "Beat",
      tahunMotor: 2021,
      kmMotor: 99999,
      Pekerjaan: "Servis Rutin",
      jasa: "Setting Throttle Position (TP), Stel Velg Belakang",
      sparepart:
        "Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza, Kanvas Rem Belakang Matic, Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza ",
      tanggal: "18-12-2024",
    },
    {
        NamaCabang: "Kalisat (Jember)",
        namaMekanik: "Moh. Dani",
        platNomor: "K 9998 HB",
        tipeMotor: "Beat",
        tahunMotor: 2021,
        kmMotor: 99999,
        Pekerjaan: "Servis Rutin",
        jasa: "Setting Throttle Position (TP), Stel Velg Belakang",
        sparepart:
          "Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza, Kanvas Rem Belakang Matic, Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza ",
        tanggal: "18-12-2024",
      },
      {
        NamaCabang: "Kalisat (Jember)",
        namaMekanik: "Moh. Dani",
        platNomor: "K 9998 HB",
        tipeMotor: "Beat",
        tahunMotor: 2021,
        kmMotor: 99999,
        Pekerjaan: "Servis Rutin",
        jasa: "Setting Throttle Position (TP), Stel Velg Belakang",
        sparepart:
          "Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza, Kanvas Rem Belakang Matic, Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza ",
        tanggal: "18-12-2024",
      },
      {
        NamaCabang: "Kalisat (Jember)",
        namaMekanik: "Moh. Dani",
        platNomor: "K 9998 HB",
        tipeMotor: "Beat",
        tahunMotor: 2021,
        kmMotor: 99999,
        Pekerjaan: "Servis Rutin",
        jasa: "Setting Throttle Position (TP), Stel Velg Belakang",
        sparepart:
          "Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza, Kanvas Rem Belakang Matic, Ban Tubeless Belakang Matic, Ban Tubeless Belakang Verza ",
        tanggal: "18-12-2024",
      },
  ];

  return (
    <div className="grid grid-rows-1 ">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Cari Rekap Pengerjaan ..."
          className="w-1/2 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
        />
      </div>
      <div className="h-4" />
      <div className="flex flex-col">
        <table className="border-collapse border-gray-300 rounded-lg">
          <thead>
            <tr className="text-black">
              <th className="py-3 px-14 font-poppins border border-grey text-darkgrey font-medium">
                Nama Cabang
              </th>
              <th className="py-3 px-12 font-poppins border border-grey text-darkgrey font-medium">
                Nama Mekanik
              </th>
              <th className="py-3 px-12 font-poppins border border-grey text-darkgrey font-medium">
                Plat Nomor
              </th>
              <th className="py-3 px-12 font-poppins border border-grey text-darkgrey font-medium">
                Tipe Motor
              </th>
              <th className="py-3 px-12 font-poppins border border-grey text-darkgrey font-medium">
                Tahun Motor
              </th>
              <th className="py-3 px-14 font-poppins border border-grey text-darkgrey font-medium">
                Km Motor
              </th>
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Pekerjaan
              </th>
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Jasa
              </th>
              <th className="py-3 px-24 font-poppins border border-grey text-darkgrey font-medium">
                Sparepart
              </th>
              <th className="py-3 px-10 font-poppins border border-grey text-darkgrey font-medium">
                Tanggal
              </th>
            </tr>
          </thead>
          <tbody>
            {spareparts.map((sparepart, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.NamaCabang}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.namaMekanik}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.platNomor}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.tipeMotor}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.tahunMotor}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.kmMotor}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.Pekerjaan}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.jasa}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.sparepart}
                </td>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.tanggal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-4" />
      <Pagination />
    </div>
  );
};

export default TableBesarRekap;
