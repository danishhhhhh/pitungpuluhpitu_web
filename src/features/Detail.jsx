import { apiRequest } from "../features/Api.jsx";

export const getDetailTimRequest = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/tim/1/stock?category=0",
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
