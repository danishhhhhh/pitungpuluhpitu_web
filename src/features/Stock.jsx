import {apiRequest} from "../features/Api.jsx";
import axios from "axios";

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

export const getExportPengerjaan = async () => {
  const token = localStorage.getItem("token");
  const additionalHeaders = {
    "Authorization": `Bearer ${token}`,
  };

  try {
    const response = await axios.get('https://stockmanagement.pitungpuluhpitu.com/api/exports/rekap', {
      headers: additionalHeaders,
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'RekapPengerjaan.xlsx');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading the file', error);
  }
};

export const getExportTimStok = async (id) => {
  const token = localStorage.getItem("token");
  const additionalHeaders = {
    "Authorization": `Bearer ${token}`,
  };

  try {
    const response = await axios.get(`https://stockmanagement.pitungpuluhpitu.com/api/exports/tim/${id}`, {
      headers: additionalHeaders,
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `SparepartStock.xlsx`);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading the file', error);
  }
};



