import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8001/contracts");
    return res;
  } catch (e) {
    return undefined;
  }
};

export const saveContract = async (contract) => {
  try {
    await axios.post("http://localhost:8001/contracts", contract);
    return true;
  } catch (e) {
    return false;
  }
};
export const removeContract = async (id) => {
  try {
    await axios.delete(`http://localhost:8001/contracts/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
export const editContract = async (contract) => {
  try {
    await axios.patch(
      `http://localhost:8001/contracts/${contract.id}`,
      contract
    );
    return true;
  } catch (e) {
    return false;
  }
};
export const findByStartDate = async (date1, date2) => {
  try {
    let res = await axios.get(
      `http://localhost:8001/contracts?startDate_gte=${date1}&startDate_lte=${date2}`
    );
    return res;
  } catch (e) {
    return undefined;
  }
};
