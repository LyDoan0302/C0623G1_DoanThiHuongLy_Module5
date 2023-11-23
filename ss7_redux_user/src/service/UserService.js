import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8002/users");
    return res.data;
  } catch (e) {
    return undefined;
  }
};
export const saveUser = async (user) => {
  try {
    await axios.post("http://localhost:8002/users", user);
    return true;
  } catch (e) {
    return false;
  }
};
export const removeById = async (id) => {
  try {
    await axios.delete(`http://localhost:8002/users/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
