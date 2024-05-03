import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../views/login_page/Login.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
