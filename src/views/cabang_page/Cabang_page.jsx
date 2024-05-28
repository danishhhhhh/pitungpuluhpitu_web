import { useState, useEffect, useContext } from "react";
import Navbar from "../../component/Navbar/navbar";
import DefaultMainTable from "../../component/Table/DefaultMainTable.jsx";
import {
  getCabangRequest,
  postAddCabangRequest,
  postEditCabangRequest,
  deleteCabangRequest,
} from "../../features/Cabang.jsx";
import { TimContext } from "../../context/Context.jsx";

const CabangPage = () => {
  const { timId } = useContext(TimContext);
  const [cabang, setCabang] = useState([]);
  const [cabangValue, setCabangValue] = useState();

  const fetchData = async () => {
    try {
      const responseCabang = await getCabangRequest();

      setCabang(responseCabang.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAddCabang = async () => {
    try {
      await postAddCabangRequest(cabangValue, timId);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postEditCabang = async (id) => {
    try {
      await postEditCabangRequest(cabangValue, id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    const deleteCabang = async (id) => {
    try {
      await deleteCabangRequest(id);
      console.log("sadasdsadasdasdsa");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex-grow">
        <Navbar data="Cabang Tim 1" showBackButton={true} />
        <div className="p-12 flex flex-row justify-center">
          <div className="w-4/6">
            <DefaultMainTable
              name={"Cabang"}
              data={cabang}
              setData={setCabang}
              value={cabangValue}
              setValue={setCabangValue}
              handleSubmitPost={postAddCabang}
              handleEditPost={postEditCabang}
              handleDeletePost={deleteCabang}
            />
          </div>
          <div className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default CabangPage;
