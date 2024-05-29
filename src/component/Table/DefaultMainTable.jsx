import React, { useState } from "react";
import "../../App.css";
import Pagination from "./Pagination.jsx";
import { debounce } from "../../component/debounce/Debounce.jsx";
import DeleteModal from "../Modal/DeleteModal.jsx";
import CommonModal from "../Modal/CommonModal.jsx";
import {FaSearch} from "react-icons/fa";


const DefaultMainTable = ({
  name,
  data,
  setData,
  currentPage,
  totalPage,
  totalData,
  setCurrentPage,
  value,
  setValue,
  handleSubmitPost,
  handleEditPost,
  handleDeletePost,
  handleSearch,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [index, setIndex] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddModal = () => {
    setValue("");
    setIsAddModalOpen(true);
  };

  const toggleEditModal = (id, index) => {
    setValue(data[index].name);
    setIndex(id);
    setIsEditModalOpen(true);
  };

  const toggleDeleteModal = (id) => {
    setIndex(id);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateSparepart = () => {
    handleEditPost(index);
    setIsEditModalOpen(false);
  };

  const handleAddSparepart = () => {
    handleSubmitPost();
    setIsAddModalOpen(false);
  };

  const handleDelete = () => {
    handleDeletePost(index);
    setIsDeleteModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
    setIsDeleteModalOpen(false);
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
        <div className="flex flex-row justify-between bg-lightgrey rounded-lg w-1/3">
          <input
            type="text"
            placeholder={`Cari ${name.toLowerCase()} ...`}
            className="w-64 py-2 px-4 bg-lightgrey rounded-lg text-darkgrey focus:outline-none font-poppins text-sm"
            onChange={handleSearchInputChange}
            value={searchQuery}
          />
             <FaSearch className="my-auto mx-4 text-darkgrey cursor-pointer"  />
        </div>
        <button
          className="bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          onClick={toggleAddModal}
        >
          Tambah {name}
        </button>
      </div>
      <div className="h-6" />
      <div className="flex flex-col">
        <table className="border-collapse border-gray-300 rounded-lg">
          <thead>
            <tr className="text-black">
              <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                Nama {name}
              </th>
              <th className="py-3 font-poppins border border-grey text-darkgrey font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((sparepart, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-poppins border border-grey">
                  {sparepart.name}
                </td>
                <td className="px-4 py-2 border border-grey text-center">
                  <button
                    className="bg-yellow font-poppins font-medium text-sm text-bluegray px-4 py-1.5 rounded-md mr-2"
                    onClick={() => toggleEditModal(sparepart.id, index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red font-poppins font-medium text-sm text-white px-4 py-1.5 rounded-md mr-2"
                    onClick={() => toggleDeleteModal(sparepart.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-6" />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        totalData={totalData}
        setCurrentPage={setCurrentPage}
      />

      {/* Add Modal */}
      <CommonModal
        name={name}
        isOpen={isAddModalOpen}
        value={value}
        setValue={setValue}
        handleSubmit={handleAddSparepart}
        handleCloseModal={handleCloseModal}
        isEdit={false}
      />

      {/* Edit Modal */}
      <CommonModal
        name={name}
        isOpen={isEditModalOpen}
        value={value}
        setValue={setValue}
        handleSubmit={() => handleUpdateSparepart(index)}
        handleCloseModal={handleCloseModal}
        isEdit={true}
      />

      {/* Delete Modal */}
      <DeleteModal
        name={name.toLowerCase()}
        isOpen={isDeleteModalOpen}
        handleCloseModal={handleCloseModal}
        handleDelete={() => handleDelete(index)}
      />
    </div>
  );
};

export default DefaultMainTable;
