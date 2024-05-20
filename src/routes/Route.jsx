import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login_page/Login.jsx";
import StockdashboardPage from "../views/stock_dashboard_page/Stock_dashboard.jsx";
import SparepartdashboardPage from "../views/sparepart_dashboard/Sparepart_dahsboard.jsx";
import MotordashboardPage from "../views/motor_dashboard/Motor_dashboard.jsx";
import PekerjaanPage from "../views/pekerjaan_page/Pekerjaan_page.jsx";
import JasaPage from "../views/jasa_page/Jasa_page.jsx";
import AkunPage from "../views/akun_page/Akun_page.jsx";
import EditProfilePage from "../views/Edit_profile_page/Edit_Profile_Page.jsx";
import DetailtimPage from "../views/detail_tim_page/Detail_tim_page.jsx";
import CabangPage from "../views/cabang_page/Cabang_page.jsx";
import RekapPage from "../views/rekap_page/Rekap_page.jsx";

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
                <Route path="/edit" element={<EditProfilePage />} />
                <Route path="/motor" element={<MotordashboardPage />} />
                <Route path="/detail" element={<DetailtimPage />} />
                <Route path="/cabang" element={<CabangPage />} />
                <Route path="/rekap" element={<RekapPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
