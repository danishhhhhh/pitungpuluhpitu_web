import { apiRequest } from "../features/Api.jsx";

export const getJasaRequest = async (page = 1) => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  const url = `/jasa?page=${page}`;

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
export const postAddJasaRequest = async (name) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/jasa`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const postEditJasaRequest = async (name,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/jasa/${id}`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const deleteJasaRequest = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("DELETE", `/jasa/${id}`, null, additionalHeaders);

  console.log(response.data);

  return response;
};
