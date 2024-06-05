import {apiRequest} from "./Api.jsx";

export const postProfile = async ({ image, name, deleteImage }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    let data = {};

    const formData = new FormData();
    if (name) {
        formData.append('name', name);
        data["name"] = name;
    }
    if (deleteImage) {
        formData.append('delete', deleteImage);
        data["delete"] = deleteImage;
    }
    if (image) {
        formData.append('image', image);
        data["image"] = image;
    }

    console.log(data)

    const additionalHeaders = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    };

    return await apiRequest("POST", `/profile`, data, additionalHeaders);
};
