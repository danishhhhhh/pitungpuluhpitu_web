import { apiRequest } from "../features/Api.jsx";

export const loginRequest = async (username, password) => {
    const additionalHeaders = {
      'Content-Type': 'application/json',
    };
    const response = await apiRequest('POST', '/login', { username, password, device: "website" }, additionalHeaders);
    console.log(response.data.token);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('role', response.data.role);
    localStorage.setItem('image', response.data.image);
    return response;
};

export const logoutRequest = async () => {
    const token = localStorage.getItem("token");
    const additionalHeaders = {
        'Authorization': `Bearer ${token}`,
    };
    const response = await apiRequest('DELETE', '/logout', null, additionalHeaders);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('image');
    return response;
};
