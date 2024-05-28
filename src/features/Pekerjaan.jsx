import { apiRequest } from "../features/Api.jsx";

export const getPekerjaanRequest = async (page = 1) => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  const url = `/pekerjaan?page=${page}`;

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

export const postAddPekerjaanRequest = async (name, timId) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/pekerjaan`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const postEditPekerjaanRequest = async (name,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/pekerjaan/${id}`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const deletePekerjaanRequest = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("DELETE", `/pekerjaan/${id}`, null, additionalHeaders);

  console.log(response.data);

  return response;
};