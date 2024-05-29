import {useState, useEffect, useContext} from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import DetailMainTable from "../../component/Table/DetailMainTable.jsx";
import {TimContext} from "../../context/Context.jsx";
import {
    getMekanikRequest,
    getDetailTimRequest,
    postAddMekanikRequest,
    postEditMekanikRequest,
    deleteMekanikRequest,
    postEditStockRequest
} from "../../features/Detail.jsx";

const DetailtimPage = () => {
    const {timId} = useContext(TimContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState();
    const [totalPage, setTotalPage] = useState();
    const [mekanik, setMekanik] = useState([]);
    const [stocktim, setStockTim] = useState([]);
    const [mekanikValue, setMekanikValue] = useState([]);

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

    const postAddMekanik = async () => {
        try {
            await postAddMekanikRequest(mekanikValue, timId);
            fetchData(currentPage)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const postEditMekanik = async (id) => {
        try {
            await postEditMekanikRequest(mekanikValue, id);
            fetchData(currentPage)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const postDeleteMekanik = async (id) => {
        try {
            await deleteMekanikRequest(id);
            fetchData(currentPage)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const postStockTim = async (quantity, sparepartId) => {
        try {
            await postEditStockRequest(quantity, sparepartId, timId);
            fetchData(currentPage)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);
    return (
        <div className="h-full flex flex-row">
            <Sidebar/>
            <div className="flex-grow">
                <Navbar data="Detail Tim 1" showBackButton={true}/>

                <div className="flex flex-row p-12">
                    <div className="w-4/6">
                        <DetailMainTable
                            name={"Detail_Tim"}
                            data={stocktim}
                            setData={setStockTim}
                            currentPage={currentPage}
                            totalData={totalData}
                            totalPage={totalPage}
                            setCurrentPage={setCurrentPage}
                            timId={timId}
                            handleEditStock={postStockTim}
                        />
                    </div>
                    <div className="w-8"/>
                    <div className="w-2/6">
                        <DefaultSecondaryTable
                            name={"Mekanik"}
                            data={mekanik}
                            setData={setMekanik}
                            value={mekanikValue}
                            setValue={setMekanikValue}
                            handleSubmitPost={postAddMekanik}
                            handleEditPost={postEditMekanik}
                            handleDeletePost={postDeleteMekanik}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailtimPage;
