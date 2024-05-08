import Sidebar from "../../component/Sidebar/sidebar"
import Navbar from "../../component/Navbar/navbar"

const SparepartdashboardPage = () => {
    return (
        <div className="flex gap-0 m-0 p-0">
            <Sidebar />
            <Navbar />
            <nav className="bg-gray-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-white font-bold text-xl">Logo</h1>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default SparepartdashboardPage;