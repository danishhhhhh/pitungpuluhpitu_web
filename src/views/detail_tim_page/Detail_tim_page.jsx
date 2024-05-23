import React, {useState} from 'react'
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";

const DetailtimPage = () => {
    const [mekanik, setMekanik] = useState([
        { nama: "Moh. Dani" },
        { nama: "Dimas Galuh" },
        { nama: "Badri" },
    ]);
  return (
    <div className='min-h-screen flex flex-row'>
         <Sidebar/>
         <div className="flex-grow">
                <Navbar data="Detail Tim 1" showBackButton={true}/>
                <div className="p-12 flex flex-row">
                    <div className="w-3/5">
                        <DetailMainTable />
                    </div>
                    <div className="w-8"/>
                    <div className="w-2/6">
                        <DefaultSecondaryTable name={"Mekanik"} data={mekanik} setData={setMekanik}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DetailtimPage
