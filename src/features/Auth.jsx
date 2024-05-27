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
    localStorage.setItem('iamge', response.data.image);
    return response;
};

export const logoutRequest = async (token) => {
    const additionalHeaders = {
        'Authorization': `Bearer ${token}`,
    };
    return await apiRequest('POST', '/logout', null, additionalHeaders);
};