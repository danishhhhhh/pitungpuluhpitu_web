import {apiRequest} from "./Api.jsx";

export const postProfile = async ({ image, name, deleteImage }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    const formData = new FormData();
    if (name) {
        formData.append('name', name);
    }
    if (deleteImage) {
        formData.append('delete', deleteImage);
    }
    if (image) {
        formData.append('image', image);
    }

    const additionalHeaders = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    };

    return await apiRequest("POST", `/profile`, formData, additionalHeaders);
};
