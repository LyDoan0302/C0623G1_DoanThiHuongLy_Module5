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
