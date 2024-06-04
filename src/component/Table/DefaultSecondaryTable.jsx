import React, { useState } from "react";
import "../../App.css";
import { IoIosClose } from "react-icons/io";
import DeleteModal from "../Modal/DeleteModal.jsx";
import CommonModal from "../Modal/CommonModal.jsx";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultSecondaryTable = ({
  name,
  data,
  setData,
  value,
  setValue,
  handleSubmitPost,
  handleEditPost,
  handleDeletePost,
}) => {
  const [isTambahModalOpen, setIsTambahModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [index, setIndex] = useState();

  const toggleTambahModal = () => {
    setValue("");
    setIsTambahModalOpen(!isTambahModalOpen);
  };

  const notifAddSuccess = () =>
    toast.success("Data berhasil ditambahkan", {
      position: "bottom-right",
      autoClose: 4000,
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
      autoClose: 4000,
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
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "font-poppins",
    });

  const toggleEditModal = (id, index) => {
    setValue(data[index].name);
    setIndex(id);
    setIsEditModalOpen(true);
  };

  const toggleDeleteModal = (id) => {
    setIndex(id);
    setIsDeleteModalOpen(true);
  };

  const handleTambahKategori = () => {
    handleSubmitPost();
    notifAddSuccess();
    setIsTambahModalOpen(false);
  };

  const handleEdit = () => {
    handleEditPost(index);
    notifEditSuccess();
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    handleDeletePost(index);
    notifDeleteSuccess();
    setIsDeleteModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsTambahModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };

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
      <div className="flex justify-end items-center">
        <button
          className="ml-4 bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
          onClick={toggleTambahModal}
        >
          Tambah {name}
        </button>
      </div>
      <div className="h-6" />
      <div className="flex flex-col">
        <table className="border-collapse border-gray-300 rounded-lg">
          <thead>
            <tr className="text-black">
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
                Nama {name}
              </th>
              <th className="py-3 px-20 font-poppins border border-grey text-darkgrey font-medium">
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

      {/* Add Modal */}
      <CommonModal
        name={name}
        isOpen={isTambahModalOpen}
        value={value}
        setValue={setValue}
        handleSubmit={handleTambahKategori}
        handleCloseModal={handleCloseModal}
        isEdit={false}
      />

      {/* Edit Modal */}
      <CommonModal
        name={name}
        isOpen={isEditModalOpen}
        value={value}
        setValue={setValue}
        handleSubmit={handleEdit}
        handleCloseModal={handleCloseModal}
        isEdit={true}
      />

      {/* Delete Modal */}
      <DeleteModal
        name={name.toLowerCase()}
        isOpen={isDeleteModalOpen}
        handleDelete={handleDelete}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default DefaultSecondaryTable;
