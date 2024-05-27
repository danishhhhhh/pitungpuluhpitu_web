import { apiRequest } from "../features/Api.jsx";

export const getAkunRequest = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/user",
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
