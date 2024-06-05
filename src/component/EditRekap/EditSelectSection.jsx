import React from 'react';
import CustomCheckbox from "./CustomCheckBox.jsx";

const EditSelectSection = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="text-gray-600 text-base font-normal font-['Poppins'] leading-7">
            Perbarui rekap pengerjaan di sini.
            <CustomCheckbox />
        </div>
    );
};

export default EditSelectSection;
