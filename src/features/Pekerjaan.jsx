import { apiRequest } from "../features/Api.jsx";

export const getPekerjaanRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    "/pekerjaan",
    null,
    additionalHeaders
  );

  console.log(response.data);

  return response;
};