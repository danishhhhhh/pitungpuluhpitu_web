import {useState, useEffect, useContext} from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import { getMekanikRequest, getDetailTimRequest } from "../../features/Detail.jsx"
import {TimContext} from "../../context/Context.jsx";


const DetailtimPage = () => {
    const { timId } = useContext(TimContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState();
    const [totalPage, setTotalPage] = useState();
    const [mekanik, setMekanik] = useState([]);
    const [stocktim, setStockTim] = useState([]);

    const fetchData = async (page = 1) => {
        try {
            const responseDetail = await getDetailTimRequest(page, timId);
            const responseMekanik = await getMekanikRequest();

            setCurrentPage(responseDetail.current_page);
            setTotalData(responseDetail.total_item);
            setTotalPage(responseDetail.total_page);

            setStockTim(responseDetail.data);
            setMekanik(responseMekanik.data);

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
                <Navbar data="Detail Tim 1" showBackButton={true}/>
                <div className="flex flex-col p-12 ">
                    <div className="mb-6 flex flex-row gap-4 justify-end">
                        <a
                            href="/cabang"
                            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                        >
                            Cabang
                        </a>
                        <a
                            href="/rekap"
                            className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
                        >
                            Rekap Pengerjaan
                        </a>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-4/6">
                            <DetailMainTable
                                name={"Detail_Tim"}
                                data={stocktim}
                                setData={setStockTim}
                                currentPage={currentPage}
                                totalData={totalData}
                                totalPage={totalPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                        <div className="w-8"/>
                        <div className="w-2/6">
                            <DefaultSecondaryTable
                                name={"Mekanik"}
                                data={mekanik}
                                setData={setMekanik}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailtimPage;
