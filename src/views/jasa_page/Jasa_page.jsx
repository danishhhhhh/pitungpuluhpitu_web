import React, {useState, useEffect} from "react";
import Sidebar from "../../component/Sidebar/sidebar.jsx";
import Navbar from "../../component/Navbar/navbar.jsx";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import {getJasaRequest} from "../../features/Jasa.jsx";

const JasaPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState();
    const [totalPage, setTotalPage] = useState();
    const [jasa, setJasa] = useState([]);

    const fetchData = async (page = 1) => {
        try {
            const responseJasa = await getJasaRequest(page);

            setCurrentPage(responseJasa.current_page);
            setTotalData(responseJasa.total_item);
            setTotalPage(responseJasa.total_page);

            setJasa(responseJasa.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    return (
        <div className="min-h-screen flex flex-row">
            <Sidebar/>
            <div className="flex-grow">
                <Navbar data="Jasa Dashboard"/>
                <div className="p-12 flex flex-row justify-center">
                    <div className="w-4/6">
                        <DefaultMainTable
                            name={"Jasa"}
                            data={jasa}
                            setData={setJasa}
                            currentPage={currentPage}
                            totalData={totalData}
                            totalPage={totalPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JasaPage;
