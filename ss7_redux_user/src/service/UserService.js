import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:8003/users");
    return res;
  } catch (e) {
    return undefined;
  }
};
export const saveUser = async (user) => {
  try {
    await axios.post("http://localhost:8003/users", user);
    return true;
  } catch (e) {
    return false;
  }
};
export const removeById = async (id) => {
  try {
    await axios.delete(`http://localhost:8003/users/${id}`);
    return true;
  } catch (e) {
    return false;
  }
};
