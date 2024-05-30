import axios from "axios";
var BASE_URL = "https://stockmanagement.pitungpuluhpitu.com/api"



const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type" : "application/json",
    "Accept" : "application/json",
    "ngrok-skip-browser-warning" : true,
  },
});

export const apiRequest = async (method, endpoint, data = null, header = {}) => {
  const defaultHeaders = { 'Accept': 'application/json' };
  const headers = { ...defaultHeaders, ...header };
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data,
      headers,
    });

    /*if(response.status == 401) {
      navigate("/login", { replace: true });
    }*/

    return response.data;
  } catch (error) {
    console.error(`Error during ${method} request to ${endpoint}:`, error);
    throw error;
  }
};
