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
