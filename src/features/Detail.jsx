import {apiRequest} from "../features/Api.jsx";

export const getDetailTimRequest = async (page = 1, timId) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const url = `/tim/${timId}/stock?page=${page}`;

    console.log(url);
    const response = await apiRequest(
        "GET",
        url,
        null,
        additionalHeaders
    );

    console.log(response.data);

    return response;
};

export const getMekanikRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("GET", "/tim/1/mekanik", null, additionalHeaders);

    console.log(response.data);

    return response;
};

export const postAddMekanikRequest = async (name, timId) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/tim/${timId}/mekanik`, { name }, additionalHeaders);

    console.log(response.data);

    return response;
};

export const postEditMekanikRequest = async (name,id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/mekanik/${id}`, { name }, additionalHeaders);

    console.log(response.data);

    return response;
};

export const deleteMekanikRequest = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("DELETE", `/mekanik/${id}`, null, additionalHeaders);

    console.log(response.data);

    return response;
};

export const postEditStockRequest = async (quantity, sparepart, timId) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/tim/${timId}/stock`, { quantity, sparepart }, additionalHeaders);

    console.log(response.data);

    return response;
};
