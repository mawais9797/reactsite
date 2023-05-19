import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/UserConstatns";

export const addUser = (values) => async (dispatch) => {
  //   debugger;
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: values,
    });

    localStorage.setItem("empInfo", JSON.stringify(values));
  } catch (error) {
    // debugger;
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
