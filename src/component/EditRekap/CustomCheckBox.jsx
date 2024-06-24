import { Checkbox } from '@material-tailwind/react';

const CustomCheckbox = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center justify-between">
            <span className="text-gray-700 font-medium font-['Poppins'] mr-2 text-base">
              {label}
            </span>
            <Checkbox
                checked={checked}
                onChange={onChange}
            />
        </label>
    );
};

export default CustomCheckbox
