import { ADD_NEW_USER, GET_ALL_USER, REMOVE_USER } from "../Constants";

const userReducer = (users = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER:
      return payload;
    case ADD_NEW_USER:
      return [...users, payload];
    case REMOVE_USER:
      let temp = [...users];
      temp = temp.filter((value) => value.id !== payload);
      return temp;
    default:
      return users;
  }
};

export default userReducer;
