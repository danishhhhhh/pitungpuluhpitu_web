import React from 'react'
import Sidebar from "../../component/Sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";


const EditRekappage = () => {
  return (
    <div className="h-full flex flex-row">
    <Sidebar />
    <div className="flex-grow">
      <Navbar data="Edit Rekap" showBackButton={true} />
      <div className="p-12 flex flex-row justify-center">
      
      </div>
    </div>
  </div>
  )
}

export default EditRekappage
