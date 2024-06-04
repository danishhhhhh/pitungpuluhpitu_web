import { useState } from "react";
import "../../App.css";
import DeleteModal from "../Modal/DeleteModal.jsx";
import SparepartModal from "../Modal/SparepartModal.jsx";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination.jsx";
import { debounce } from "../../component/debounce/Debounce.jsx";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SparepartMainTable = ({
  spareparts,
  setSpareparts,
  currentPage,
  totalPage,
  totalData,
  setCurrentPage,
  kategori,
  handleSubmitPost,
  handleEditPost,
  handleDeletePost,
  handleSearch,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idSparepart, setIdSparepart] = useState(null);
  const [idKategori, setIdKategori] = useState(null);
  const [sparepartValue, setSparepartValue] = useState("");
  const [kategoriValue, setKategoriValue] = useState("Lainnya");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleTambahSparepart = (name, kategoriId) => {
    handleSubmitPost(name, kategoriId);
    notifAddSuccess();
    setIsAddModalOpen(false);
  };

  const handleEditSparepart = (name, kategoriId, id) => {
    handleEditPost(name, kategoriId, id);
    notifEditSuccess();
    setIsEditModalOpen(false);
  };

  const handleDeleteSparepart = (id) => {
    handleDeletePost(id);
    notifDeleteSuccess();
    setIsDeleteModalOpen(false);
  };

  const handleEditClick = (index) => {
    setIdSparepart(spareparts[index].id);
    setSparepartValue(spareparts[index].name);
    setKategoriValue(spareparts[index].kategori);
    toggleEditModal();
  };

  const handleDeleteClick = (index) => {
    setIdSparepart(spareparts[index].id);
    toggleDeleteModal();
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setKategoriValue("");
    setSparepartValue("");
  };
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };
  const notifAddSuccess = () =>
    toast.success("Data berhasil ditambahkan", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "font-poppins",
    });
  const notifEditSuccess = () =>
    toast.success("Data berhasil diedit", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "font-poppins",
    });
  const notifDeleteSuccess = () =>
    toast.success("Data berhasil dihapus", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "font-poppins",
    });

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    handleSearch(query);
  }, 1500);

  return (
    <div className="grid grid-rows-1">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/2">
          <input
            type="text"
            placeholder={`Cari ${name.toLowerCase()} ...`}
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
            onChange={handleSearchInputChange}
            value={searchQuery}
          />
          <FaSearch className="my-auto mx-4  text-darkgrey" />
        </div>
        <button
          className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          onClick={toggleAddModal}
        >
          Tambah Sparepart
        </button>
      </div>
      <div className="h-6" />
      {/* Tabel */}
      <table className="border-collapse border-gray-300 rounded-lg">
        <thead>
          <tr className="text-black">
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Nama Sparepart
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Kategori
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {spareparts.map((sparepart, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.name}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {sparepart.kategori ?? "Lainnya"}
              </td>
              <td className="px-4 py-2 border border-grey text-center">
                <button
                  className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2"
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red font-poppins font-medium text-sm text-white px-4 py-1.5 rounded-md mr-2"
                  onClick={() => handleDeleteClick(index)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-6" />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        totalData={totalData}
        setCurrentPage={setCurrentPage}
      />

      {/* Add Modal */}
      <SparepartModal
        isEdit={false}
        isOpen={isAddModalOpen}
        handleCloseModal={handleCloseModal}
        sparepartValue={sparepartValue}
        setSparepartValue={setSparepartValue}
        setKategoriValue={setKategoriValue}
        kategoriValue={kategoriValue}
        handleSubmit={() => handleTambahSparepart(sparepartValue, idKategori)}
        kategori={kategori}
      />

      {/* Edit Modal */}
      <SparepartModal
        isEdit={true}
        isOpen={isEditModalOpen}
        handleCloseModal={handleCloseModal}
        sparepartValue={sparepartValue}
        setSparepartValue={setSparepartValue}
        setKategoriValue={setKategoriValue}
        kategoriValue={kategoriValue}
        handleSubmit={() =>
          handleEditSparepart(sparepartValue, idKategori, idSparepart)
        }
        kategori={kategori}
        idKategori={idKategori}
        setIdKategori={setIdKategori}
      />

      {/* Delete Modal */}
      <DeleteModal
        name={name.toLowerCase()}
        isOpen={isDeleteModalOpen}
        handleCloseModal={handleCloseModal}
        handleDelete={() => handleDeleteSparepart(idSparepart)}
      />
    </div>
  );
};

export default SparepartMainTable;
