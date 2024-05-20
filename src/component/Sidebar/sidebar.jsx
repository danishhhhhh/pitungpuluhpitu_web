import React from "react";
import {
    FaBox,
    FaToolbox,
    FaMotorcycle,
    FaTools,
    FaUserCog,
    FaUserCircle,
} from "react-icons/fa";
import {NavLink, useLocation} from "react-router-dom";
import {MdModeEditOutline} from "react-icons/md";

const Sidebar = () => {
    const location = useLocation();
    const activeClass = "bg-yellow text-bluegrey";
    const inactiveClass = "bg-bluegrey text-white";
    const handleNavigation = (route) => {
        window.location.href = route;
    };

    return (
        <div className="w-80 bg-lightnavy h-screen left-0 sticky top-0 p-5">
            <img
                src="src/assets/img/logo.svg"
                alt=""
                className="w-52 top-0 rounded mx-auto mt-8"
            />
            <div className="top-10 my-14 flex items-center justify-between">
                <div className="flex flex-row">
                    <img
                        src="src/assets/img/profile.svg"
                        alt=""
                        className="rounded-lg w-10"
                    />
                    <div className="w-3"/>
                    <div className="">
                        <p className="font-poppins text-white">
                            Danish Ardiyanta
                        </p>
                        <p className="font-poppins text-yellow text-sm">
                            Admin
                        </p>
                    </div>
                </div>
                <div
                    className={`rounded-lg p-2 ${
                        location.pathname === "/edit" ? activeClass : inactiveClass
                    }  rounded-xl`}
                >
                    <NavLink to="/edit">
                        <MdModeEditOutline className="w-5 h-5"/>
                    </NavLink>
                </div>
            </div>
            <div className="justify-between flex flex-col">
                <ul className="text-white font-poppins">
                    <li
                        className={`mb-4 rounded-lg py-4 px-10 ${
                            location.pathname === "/stock" ? activeClass : inactiveClass
                        }`}
                        onClick={() => handleNavigation("/stock")}
                    >
                        <div className="flex flex-row items-center">
                            <FaBox/>
                            <div className="w-3"/>
                            Stock
                        </div>
                    </li>

                    <li
                        className={`mb-4 rounded-lg py-4 px-10 ${
                            location.pathname === "/sparepart" ? activeClass : inactiveClass
                        }`}
                        onClick={() => handleNavigation("/sparepart")}
                    >
                        <div className="flex flex-row items-center">
                            <FaToolbox/>
                            <div className="w-3"/>
                            Sparepart
                        </div>
                    </li>

                    <li
                        className={`mb-4 rounded-lg py-4 px-10 ${
                            location.pathname === "/motor" ? activeClass : inactiveClass
                        }`}
                        onClick={() => handleNavigation("/motor")}
                    >
                        <div className="flex flex-row items-center">
                            <FaMotorcycle/>
                            <div className="w-3"/>
                            Motor
                        </div>
                    </li>

                    <li
                        className={`mb-4 rounded-lg py-4 px-10 ${
                            location.pathname === "/pekerjaan" ? activeClass : inactiveClass
                        }`}
                        onClick={() => handleNavigation("/pekerjaan")}
                    >
                        <div className="flex flex-row items-center">
                            <FaTools/>
                            <div className="w-3"/>
                            Pekerjaan
                        </div>
                    </li>

                    <li
                        className={`mb-4 rounded-lg py-4 px-10 ${
                            location.pathname === "/jasa" ? activeClass : inactiveClass
                        }`}
                        onClick={() => handleNavigation("/jasa")}
                    >
                        <div className="flex flex-row items-center">
                            <FaUserCog/>
                            <div className="w-3"/>
                            Jasa
                        </div>
                    </li>

                    <li
                        className={`mb-4 rounded-lg py-4 px-10 ${
                            location.pathname === "/akun" ? activeClass : inactiveClass
                        }`}
                        onClick={() => handleNavigation("/akun")}
                    >
                        <div className="flex flex-row items-center">
                            <FaUserCircle/>
                            <div className="w-3"/>
                            Akun
                        </div>
                    </li>
                </ul>
                <a href="/" className="bg-red rounded-lg py-4 px-10 flex items-center justify-between">
                    <div className="flex items-center justify-center text-center w-full text-md font-medium text-white">
                        Keluar
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;