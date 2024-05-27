import { apiRequest } from "../features/Api.jsx";

export const getMotorRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/motor",
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};

export const getTahunRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/tahun",
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};