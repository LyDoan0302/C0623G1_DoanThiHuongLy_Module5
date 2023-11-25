import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8001/services");
    return res;
  } catch (e) {
    return undefined;
  }
};
export const getFacilityById = async (id) => {
  try {
    let res = await axios.get(`http://localhost:8001/services/${id}`);
    return res;
  } catch (e) {
    return undefined;
  }
};
export const saveFacility = async (value) => {
  try {
    await axios.post("http://localhost:8001/services", value);
    return true;
  } catch (e) {
    return false;
  }
};
export const removeFacility = async (id) => {
  try {
    await axios.delete(`http://localhost:8001/services/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
export const editFacility = async (id) => {
  try {
    await axios.patch(`http://localhost:8001/services/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
export const getAllServiceType = async () => {
  try {
    let res = await axios.get("http://localhost:8001/serviceType");
    return res;
  } catch (e) {
    return undefined;
  }
};
export const getAllRentType = async () => {
  try {
    let res = await axios.get("http://localhost:8001/rentType");
    return res;
  } catch (e) {
    return undefined;
  }
};
