import {apiRequest} from "../features/Api.jsx";

export const getAkunRequest = async (page = 1) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const url = `/user?page=${page}`;

    console.log(additionalHeaders);
    const response = await apiRequest(
        "GET",
        url,
        null,
        additionalHeaders
    );

    console.log(response.data);

    return response;
};

export const getTimRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("GET", "/tim", null, additionalHeaders);

    console.log(response.data);

    return response;
};


export const postAddTimRequest = async (name) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/tim`, {name}, additionalHeaders);

    console.log(response.data);

    return response;
};

export const postEditTimRequest = async (name, id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/tim/${id}`, {name}, additionalHeaders);

    console.log(response.data);

    return response;
};

export const deleteTimRequest = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);
    const response = await apiRequest("DELETE", `/tim/${id}`, null, additionalHeaders);

    console.log(response.data);

    return response;
};

export const postAkunRequest = async (role, username, password, name, tim) => {
    const token = localStorage.getItem("token");
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(additionalHeaders);

    const url = `/user`;

    return await apiRequest(
        "POST",
        url,
        {role, username, password, name, tim},
        additionalHeaders
    );
};

export const postEditAkunRequest = async (role, username, password, name, tim, id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const url = `/user/${id}`;

    return await apiRequest(
        "POST",
        url,
        {role, username, password, name, tim},
        additionalHeaders
    );
};


export const deleteAkunRequest = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const url = `/user/${id}`;

    return await apiRequest(
        "DELETE",
        url,
        null,
        additionalHeaders
    );
};
