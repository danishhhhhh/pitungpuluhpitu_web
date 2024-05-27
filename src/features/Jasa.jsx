import { apiRequest } from "../features/Api.jsx";

export const getJasaRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/jasa",
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};