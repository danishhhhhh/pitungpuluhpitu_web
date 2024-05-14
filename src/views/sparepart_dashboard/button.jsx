// import React, { useState } from "react";

// const PopupExample = () => {
//     const [isPopupOpen, setIsPopupOpen] = useState(false);

//     const openPopup = () => {
//         setIsPopupOpen(true);
//     };

//     const closePopup = () => {
//         setIsPopupOpen(false);
//     };

//     return (
//         <div>
//             <div className="ml-auto flex">
//                 <button
//                     onClick={openPopup}
//                     className="bg-yellow mr-30 px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
//                 >
//                     Tambah Sparepart
//                 </button>
//                 <button
//                     onClick={openPopup}
//                     className="bg-yellow mr-2  ml-32 px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
//                 >
//                     Tambah Kategori
//                 </button>
//             </div>

//             {isPopupOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
//                     <div className="bg-white p-8 rounded-lg">
//                         <h2 className="text-xl font-semibold mb-4">Popup Title</h2>
//                         <p>Isi dari popup</p>
//                         <button
//                             onClick={closePopup}
//                             className="mt-4 bg-yellow px-4 py-2 rounded-lg text-black font-normal font-poppins text-sm"
//                         >
//                             Tutup Popup
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PopupExample;
