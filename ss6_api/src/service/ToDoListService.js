import axios from "axios";

export const getALl = async () => {
  try {
    let response = await axios.get("http://localhost:8000/toDoList");
    return response.data;
  } catch (e) {
    return undefined;
  }
};

export const saveTask = async (task) => {
  try {
    await axios.post("http://localhost:8000/toDoList", task);
    return true;
  } catch (e) {
    return false;
  }
};
