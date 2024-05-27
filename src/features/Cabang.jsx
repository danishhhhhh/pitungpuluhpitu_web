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