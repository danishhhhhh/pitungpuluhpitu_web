import React from 'react';
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import './motor.css';

const MotordashboardPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-1 ">
                <Navbar data="Data Motor" />
                <div className="flex flex-col w-full">
                </div>
            </div>
        </div>
    );
};

export default MotordashboardPage;
