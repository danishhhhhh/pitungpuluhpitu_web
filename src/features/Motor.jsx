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




export const postAddMotorRequest = async (name) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/motor`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const postEditMotorRequest = async (name,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/motor/${id}`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const deleteMotorRequest = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("DELETE", `/motor/${id}`, null, additionalHeaders);

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



export const postAddTahunRequest = async (name) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/tahun`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const postEditTahunRequest = async (name,id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("POST", `/tahun/${id}`, { name }, additionalHeaders);

  console.log(response.data);

  return response;
};

export const deleteTahunRequest = async (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
  };

  console.log(additionalHeaders);
  const response = await apiRequest("DELETE", `/tahun/${id}`, null, additionalHeaders);

  console.log(response.data);

  return response;
};
