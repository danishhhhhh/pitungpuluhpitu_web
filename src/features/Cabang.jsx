import { apiRequest } from "../features/Api.jsx";

export const getCabangRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/tim/1/cabang",
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};


export const postAddCabangRequest = async (name, timId) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/tim/${timId}/cabang`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const postEditCabangRequest = async (name,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/cabang/${id}`, { name }, additionalHeaders);

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