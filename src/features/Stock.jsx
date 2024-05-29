import { apiRequest } from "../features/Api.jsx";
export const getTimRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
  
    console.log(additionalHeaders);
    const response = await apiRequest("GET", "/tim", null, additionalHeaders);
  
    console.log(response.data);
  
    return response;
  };

  export const getSearchTimRequest = async (query) => {
    const token = localStorage.getItem("token");
    console.log(token);
  const additionalHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };
  
  console.log(additionalHeaders);
  const response = await apiRequest(
    "GET",
    `/tim?search=${query}`,
    null,
    additionalHeaders
  );
  
  console.log(response.data);
  
  return response;
  };
  

  export const getPendingRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
  
    console.log(additionalHeaders);
    const response = await apiRequest("GET", "/pending", null, additionalHeaders);
  
    console.log(response.data);
  
    return response;
  };


  
  export const postConfirmRequest = async (confirm ,id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const additionalHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
  
    console.log(additionalHeaders);
    const response = await apiRequest("POST", `/pending/${id}`, { confirm }, additionalHeaders);
  
    console.log(response.data);
  
    return response;
  };
  
  

