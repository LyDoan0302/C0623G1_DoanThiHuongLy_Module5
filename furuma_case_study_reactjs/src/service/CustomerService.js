import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8001/customers");
    return res;
  } catch (e) {
    return undefined;
  }
};
export const getCutomerType = async () => {
  try {
    let res = await axios.get("http://localhost:8001/customers/types");
    return res;
  } catch (e) {
    return undefined;
  }
};
export const saveCustomer = async (customer) => {
  try {
    await axios.post("http://localhost:8001/customers", customer);
    return true;
  } catch (e) {
    return false;
  }
};
export const removeCustomer = async (id) => {
  try {
    await axios.delete(`http://localhost:8001/customer/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
export const editCustomer = async (customer) => {
  try {
    await axios.patch(
      `http://localhost:8001/customer/${customer.id}`,
      customer
    );
    return true;
  } catch (e) {
    return false;
  }
};
