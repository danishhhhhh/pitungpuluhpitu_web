import { apiRequest } from "../features/Api.jsx";

export const loginRequest = async (username, password) => {
    const additionalHeaders = {
      'Content-Type': 'application/json',
    };
    return await apiRequest('POST', '/login', { username, password, device: "website" }, additionalHeaders);
};

export const logoutRequest = async (token) => {
    const additionalHeaders = {
        'Authorization': `Bearer ${token}`,
    };
    return await apiRequest('POST', '/logout', null, additionalHeaders);
};