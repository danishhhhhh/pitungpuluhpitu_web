import {apiRequest} from "../features/Api.jsx";

export const getDetailTimRequest = async (page = 1, tim) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const url = `/tim/${tim}/stock?page=${page}`;

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
