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
    let res = await axios.get("http://localhost:8001/customerTypes");
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
    await axios.delete(`http://localhost:8001/customers/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
export const editCustomer = async (customer) => {
  try {
    await axios.patch(
      `http://localhost:8001/customers/${customer.id}`,
      customer
    );
    return true;
  } catch (e) {
    return false;
  }
};
export const findCustomerById = async (id) => {
  try {
    let res = await axios.get(`http://localhost:8001/customers/${id}`);
    return res;
  } catch (e) {
    return undefined;
  }
};
export const findByNameAndPhone = async (name, phone) => {
  try {
    let res = await axios.get(
      `http://localhost:8001/customers?fullName_like=${name}&phone_like=${phone}`
    );
    return res;
  } catch (e) {
    return undefined;
  }
};
