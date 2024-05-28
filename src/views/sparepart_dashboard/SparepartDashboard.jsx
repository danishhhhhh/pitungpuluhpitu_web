import { useState, useEffect } from "react";
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import SparepartMainTable from "../../component/Table/SparepartMainTable.jsx";
import DefaultSecondaryTable from "../../component/Table/DefaultSecondaryTable.jsx";
import {
  getKategoriRequest,
  getSparepartRequest,
  postAddKategoriRequest,
  postEditKategoriRequest,
  deleteKategoriRequest,
} from "../../features/Sparepart.jsx";

const SparepartDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [spareparts, setSpareparts] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState();

  const fetchData = async (page = 1) => {
    try {
      const responseSparepart = await getSparepartRequest(page);
      const responseKategori = await getKategoriRequest();

      setCurrentPage(responseSparepart.current_page);
      setTotalData(responseSparepart.total_item);
      setTotalPage(responseSparepart.total_page);

      setSpareparts(responseSparepart.data);
      setCategory(responseKategori.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const postAddKategori = async () => {
    try {
      await postAddKategoriRequest(categoryValue);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postEditKategori = async (id) => {
    try {
      await postEditKategoriRequest(categoryValue, id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteKategori = async (id) => {
    try {
      await deleteKategoriRequest(id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Sparepart Dashboard" />
        <div className="p-12 flex flex-row">
          <div className="w-4/6">
            <SparepartMainTable
              spareparts={spareparts}
              setSpareparts={setSpareparts}
              currentPage={currentPage}
              totalData={totalData}
              totalPage={totalPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="w-8" />
          <div className="w-2/6">
            <DefaultSecondaryTable
              name={"Kategori"}
              data={category}
              setData={setCategory}
              value={categoryValue}
              setValue={setCategoryValue}
              handleSubmitPost={postAddKategori}
              handleEditPost={postEditKategori}
              handleDeletePost={deleteKategori}
            
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparepartDashboard;
