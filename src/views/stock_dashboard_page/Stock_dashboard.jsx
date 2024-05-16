import Sidebar from "../../component/Sidebar/sidebar";
import Dashboard from "../../component/Dashboard/Dashboard";
import Navbar from "../../component/Navbar/navbar";
const StockdashboardPage = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Navbar data="Data Stock" />
      <div className="w-full h-1 ">

        <Dashboard />
      </div>
    </div>
  );
};

export default StockdashboardPage;
