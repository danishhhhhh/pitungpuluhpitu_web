import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login_page/Login.jsx";
import StockdashboardPage from "../views/stock_dashboard_page/Stock_dashboard.jsx";
import SparepartdashboardPage from "../views/sparepart_dashboard/Sparepart_dahsboard.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/stock" element={<StockdashboardPage />} />
                <Route path="/sparepart" element={<SparepartdashboardPage />} />
                <Route path="/motor" element={<MotordashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
