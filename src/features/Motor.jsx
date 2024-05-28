import { apiRequest } from "./Api.jsx";

export const getMotorRequest = async (page = 1) => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  const url = `/motor?page=${page}`;


  const response = await apiRequest(
    "GET",
      url,
    null,
    additionalHeaders
  );
  console.log("sdasdasdasdasdsasdasdadsasasddsasdasda");

  console.log(response);

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
