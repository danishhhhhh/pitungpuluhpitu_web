import {apiRequest} from "./Api.jsx";

export const getSparepartRequest = async (page = 1) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);

  const url = `/sparepart?page=${page}`;

  return await apiRequest(
      "GET",
      url,
      null,
      additionalHeaders
  );
};

export const getKategoriRequest = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  return await apiRequest("GET", "/kategori", null, additionalHeaders);
};
