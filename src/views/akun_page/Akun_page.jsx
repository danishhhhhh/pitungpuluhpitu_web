import React, {useState} from 'react'
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import DefaultMainTable from '../../component/Table/DefaultMainTable.jsx';

const AkunPage = () => {
    const [akun, setAkun] = useState([
        { nama: "akun 1" },
        { nama: "akun 2" },
        { nama: "akun 3" },
    ]);

    const [tim, setTim] = useState([
        { nama: "tim 1" },
        { nama: "tim 2" },
        { nama: "tim 3" },
    ]);

    return (
        <div className='min-h-screen flex flex-row'>
            <Sidebar/>
            <div className="flex-grow">
                <Navbar data="Detail Tim 1" showBackButton={true}/>
                <div className="p-12 flex flex-row">
                    <div className="w-3/5">
                    <DefaultMainTable name={"Akun"} data={akun} setData={setAkun}/>
                    </div>
                    <div className="w-8"/>
                    <div className="w-2/6">
                        <DefaultSecondaryTable name={"Tim"} data={tim} setData={setTim}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AkunPage;