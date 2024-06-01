import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/devices";

export const listDevices = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createDevice = (device) => axios.post(REST_API_BASE_URL, device);

export const getDevice = (deviceId) =>
  axios.get(REST_API_BASE_URL + "/" + deviceId);

export const updateDevice = (deviceId, device) =>
  axios.put(REST_API_BASE_URL + "/" + deviceId, device);

export const deleteDevice = (deviceId) =>
  axios.delete(REST_API_BASE_URL + "/" + deviceId);
