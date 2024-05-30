import { apiRequest } from "../features/Api.jsx";

export const getRekapRequest = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    `/tim/${id}/lapor?search=`,
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};
export const getSearchRekapRequest = async (query,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
const additionalHeaders = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
};

console.log(additionalHeaders);
const response = await apiRequest(
  "GET",
  `/tim/${id}/lapor?search=${query}`,
  null,
  additionalHeaders
);

console.log(response.data);

return response;
};