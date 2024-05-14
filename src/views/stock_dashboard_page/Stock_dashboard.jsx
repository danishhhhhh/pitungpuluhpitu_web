import Sidebar from "../../component/Sidebar/sidebar";
import Dashboard from "../../component/Dashboard/Dashboard";

const StockdashboardPage = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="w-full h-1 ">
    <Dashboard/>
      </div>
    </div>
  );
};

export default StockdashboardPage;
