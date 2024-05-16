import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login_page/Login.jsx";
import StockdashboardPage from "../views/stock_dashboard_page/Stock_dashboard.jsx";
import SparepartdashboardPage from "../views/sparepart_dashboard/Sparepart_dahsboard.jsx";
import MotordashboardPage from "../views/motor_dashboard/Motor_dashboard.jsx";
import PekerjaanPage from "../views/pekerjaan_page/Pekerjaan_page.jsx";
import JasaPage from "../views/jasa_page/Jasa_page.jsx";
import AkunPage from "../views/akun_page/Akun_page.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/stock" element={<StockdashboardPage />} />
                <Route path="/sparepart" element={<SparepartdashboardPage />} />
                <Route path="/pekerjaan" element={<PekerjaanPage />} />
                <Route path="/jasa" element={<JasaPage />} />
                <Route path="/akun" element={<AkunPage />} />
                <Route path="/motor" element={<MotordashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
