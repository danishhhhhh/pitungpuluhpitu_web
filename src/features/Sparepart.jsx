import { apiRequest } from "../features/Api.jsx";

export const getSparepartRequest = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/sparepart",
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};

export const getKategoriRequest = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("GET", "/kategori", null, additionalHeaders);

  console.log(response.data);

  return response;
};
