import React, { useState } from "react";
import "../../App.css";
import DeleteModal from "../Modal/DeleteModal.jsx";
import AkunModal from "../Modal/AkunModal.jsx";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination.jsx";
import { debounce } from "../../component/debounce/Debounce.jsx"; 


const AkunMainTable = ({
  name,
  data,
  setData,
  currentPage,
  totalPage,
  totalData,
  setCurrentPage,
  tim,
  handleSubmitPost,
  handleEditPost,
  handleDeletePost,
  handleSearch,

}) => {
  const [akunValue, setAkunValue] = useState({
    name: "",
    username: "",
    password: "",
    role: "Admin",
    tim: tim.length > 0 ? tim[0].value : "",
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idTim, setIdTim] = useState();
  const [idAkun, setIdAkun] = useState();
  const [searchQuery, setSearchQuery] = useState("");


  const roleMapping = {
    Owner: 1,
    Admin: 2,
    "Service Advisor": 3,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAkunValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(akunValue);
  };

  const toggleAddModal = () => {
    console.log(akunValue);
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleAddSubmit = (role, username, password, name, tim) => {
    console.log(`abc abc ${tim}`);
    const roleId = roleMapping[role] || null;
    handleSubmitPost(roleId, username, password, name, tim);
    toggleAddModal();
  };

  const handleEditSubmit = (role, username, password, name, tim, id) => {
    console.log(`ini name ${name}`);
    const roleId = roleMapping[role] || null;
    handleEditPost(roleId, username, password, name, tim, id);
    toggleEditModal();
  };

  const handleDeleteSubmit = (id) => {
    console.log(`ini iasdadadsads ${id}`);
    handleDeletePost(id);
    toggleDeleteModal();
  };

  const handleEditClick = (index) => {
    setAkunValue(data[index]);
    setIdAkun(data[index].id);
    console.log(`ini name ${name}`);
    toggleEditModal();
  };

  const handleDeleteClick = (index) => {
    setAkunValue(data[index]);
    setIdAkun(data[index].id);
    toggleDeleteModal();
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setAkunValue({ name: "", username: "", password: "", role: "", tim: "" });
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    handleSearch(query);
  }, 1500);

  return (
    <div className="grid grid-rows-1">
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
          Tambah Akun
        </button>
      </div>
      <div className="h-6" />
      {/* Table */}
      <table className="border-collapse border-gray-300 rounded-lg">
        <thead>
          <tr className="text-black">
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Nama akun
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Username
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Password
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Role
            </th>
            <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((akun, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-poppins border border-grey">
                {akun.name}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {akun.username}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {akun.password}
              </td>
              <td className="px-4 py-2 font-poppins border border-grey">
                {akun.role}
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
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        totalData={totalData}
        setCurrentPage={setCurrentPage}
      />

      {/* Add Modal */}
      <AkunModal
        isEdit={false}
        isOpen={isAddModalOpen}
        handleCloseModal={handleCloseModal}
        tim={tim}
        akunValue={akunValue}
        handleInputChange={handleInputChange}
        handleSubmit={() =>
          handleAddSubmit(
            akunValue.role,
            akunValue.username,
            akunValue.password,
            akunValue.name,
            idTim
          )
        }
        setIdTim={setIdTim}
      />

      {/* Edit Modal */}
      <AkunModal
        isEdit={true}
        isOpen={isEditModalOpen}
        handleCloseModal={handleCloseModal}
        tim={tim}
        akunValue={akunValue}
        handleInputChange={handleInputChange}
        setIdTim={setIdTim}
        handleSubmit={() =>
          handleEditSubmit(
            akunValue.role,
            akunValue.username,
            akunValue.password,
            akunValue.name,
            idTim,
            idAkun
          )
        }
      />

      {/* Delete Modal */}
      <DeleteModal
        name={name.toLowerCase()}
        isOpen={isDeleteModalOpen}
        handleCloseModal={handleCloseModal}
        handleDelete={() => handleDeleteSubmit(idAkun)}
      />
    </div>
  );
};

export default AkunMainTable;
