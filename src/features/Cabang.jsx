import {apiRequest} from "../features/Api.jsx";

export const getCabangRequest = async (page = 1) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const url = `/cabang?page=${page}`;

    const response = await apiRequest(
        "GET",
        url,
        null,
        additionalHeaders
    );

    console.log(response.data);

    return response;
};
export const getSearchCabangRequest = async (query) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest(
        "GET",
        `/cabang?search=${query}`,
        null,
        additionalHeaders
    );

    console.log(response.data);

    return response;
};


export const postAddCabangRequest = async (name) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/cabang`, {name}, additionalHeaders);

    console.log(response.data);

    return response;
};

export const postEditCabangRequest = async (name, id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/cabang/${id}`, {name}, additionalHeaders);

    console.log(response.data);

    return response;
};

export const deleteCabangRequest = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("DELETE", `/cabang/${id}`, null, additionalHeaders);

    console.log(response.data);

    return response;
};
