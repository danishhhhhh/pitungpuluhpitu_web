import React, { useState } from "react";
import Navbar from "../../component/Navbar/navbar";
import Sidebar from "../../component/Sidebar/sidebar";
import { MdOutlineFileUpload } from "react-icons/md";

const EditProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [adminName, setAdminName] = useState("Danish Ardiyanta");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview("");
  };

  const handleNameChange = (e) => {
    setAdminName(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow">
        <Navbar data="Edit" />
        <div className="w-full p-10 flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="flex-col justify-start items-start gap-[5px] flex">
            <div className="text-slate-800 text-2xl font-semibold font-['Poppins'] leading-7">
              Profil
            </div>
            <div className="text-gray-600 text-base font-normal font-['Poppins'] leading-7">
              Perbarui detail foto dan nama anda di sini.
            </div>
          </div>
          <div className="self-stretch h-[0px] border-grey border border-neutral-300"></div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="justify-start items-start gap-5 inline-flex">
              <div className="w-[150px] h-[150px] bg-grey rounded-[20px] overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="py-2.5 flex-col justify-start items-start gap-[15px] inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Poppins'] leading-7">
                  Foto Profil
                </div>
                <div className="flex-col justify-start items-start gap-[5px] flex">
                  <div className="justify-start items-start gap-[5px] inline-flex">
                    <label className="px-2.5 py-1 bg-yellow rounded-[10px] justify-center items-center gap-[5px] flex cursor-pointer">
                      <MdOutlineFileUpload className="w-4 h-4 relative" />
                      <div className="text-bluegrey text-xs font-normal font-['Poppins'] leading-7">
                        Upload Gambar
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={handleRemoveImage}
                      className="px-2.5 py-0.5 bg-white rounded-[10px] border-2 border-red justify-center items-center gap-[5px] flex"
                    >
                      <div className="text-red text-xs font-normal font-['Poppins'] leading-7">
                        Hapus Gambar
                      </div>
                    </button>
                  </div>
                  <div className="text-grey text-xs font-normal font-['Poppins'] leading-7">
                    Kami mendukung PNG dan JPG di bawah 10mb.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-2.5 flex">
              <div className="self-stretch h-[78px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-center text-gray-800 text-sm font-medium font-['Poppins']">
                  Nama Admin
                </div>
                <input
                  type="text"
                  value={adminName}
                  onChange={handleNameChange}
                  className="w-[500px] px-[15px] py-4 bg-white rounded-[15px] border border-grey text-bluegrey text-[13px] font-medium font-['Poppins'] focus:outline-none focus:border-grey"
                />
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <button className="px-[15px] py-[5px] bg-yellow rounded-[10px] justify-center items-center gap-[5px] flex">
              <div className="text-bluegrey text-sm font-normal font-['Poppins'] leading-7">
                Simpan Perubahan
              </div>
            </button>
            <button className="px-[15px] py-[5px] bg-white rounded-[10px] border-2 border-red justify-center items-center gap-[5px] flex">
              <div className="text-red text-sm font-normal font-['Poppins'] leading-7">
                Batalkan
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
