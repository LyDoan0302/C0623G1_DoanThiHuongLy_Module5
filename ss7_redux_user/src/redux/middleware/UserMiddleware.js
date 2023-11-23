import * as userService from "../../service/UserService";
import { ADD_NEW_USER, GET_ALL_USER, REMOVE_USER } from "../Constants";

export const getAllUser = () => async (dispatch) => {
  const res = await userService.getAll();
  dispatch({
    type: GET_ALL_USER,
    payload: res,
  });
};

export const createNewUser = (value) => async (dispatch) => {
  await userService.saveUser(value);
  dispatch({
    type: ADD_NEW_USER,
    payload: value,
  });
};

export const removeUserMiddleware = (id) => async (dispatch) => {
  await userService.removeById(id);
  dispatch({
    type: REMOVE_USER,
    payload: id,
  });
};
