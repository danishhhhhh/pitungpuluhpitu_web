import React, {useState} from "react";
import Navbar from "../../component/Navbar/navbar";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";

const CabangPage = () => {
  const [cabang, setCabang] = useState([
    { nama: 'Kalisat (Jember)' },
    { nama: 'Sumber Wringin (Bondowoso)' },
    { nama: 'Ulamm (Bondowoso)' },
    { nama: 'Bondowoso 2 (Bondowoso 3)' },
  ]);

  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex-grow">
        <Navbar data="Cabang Tim 1" showBackButton={true}  />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-3/5">
            <DefaultMainTable name={"Cabang"} data={cabang} setData={setCabang}/>
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default CabangPage;
