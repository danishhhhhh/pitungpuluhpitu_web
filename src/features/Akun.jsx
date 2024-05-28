import { apiRequest } from "../features/Api.jsx";

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
