import React from 'react'
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";

const JasaPage = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Navbar data="Data Jasa" />

    </div>
  )
}

export default JasaPage
