import {apiRequest} from "./Api.jsx";

export const getSparepartRequest = async (page = 1) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);

  const url = `/sparepart?page=${page}`;

  return await apiRequest(
      "GET",
      url,
      null,
      additionalHeaders
  );
};


export const getSearchSparepartRequest = async (query) => {
  const token = localStorage.getItem("token");
  console.log(token);
const additionalHeaders = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
};

console.log(additionalHeaders);
const response = await apiRequest(
  "GET",
  `/sparepart?search=${query}`,
  null,
  additionalHeaders
);

console.log(response.data);

return response;
};


export const postSparepartRequest = async (name, kategori) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);

  const url = `/sparepart`;

  return await apiRequest(
      "POST",
      url,
      { name, kategori },
      additionalHeaders
  );
};

export const editSparepartRequest = async (name, kategori,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);

  const url = `/sparepart/${id}`;

  return await apiRequest(
      "POST",
      url,
      { name, kategori },
      additionalHeaders
  );
};

export const deleteSparepartRequest = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  const response = await apiRequest("DELETE", `/sparepart/${id}`, null, additionalHeaders);

  console.log(response.data);

  return response;
};

export const getKategoriRequest = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  return await apiRequest("GET", "/kategori", null, additionalHeaders);
};
export const postAddKategoriRequest = async (name) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/kategori`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const postEditKategoriRequest = async (name,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/kategori/${id}`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const deleteKategoriRequest = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("DELETE", `/kategori/${id}`, null, additionalHeaders);

  console.log(response.data);

  return response;
};
