import {
  USER_FORM_REQUEST,
  USER_FORM_SUCCESS,
  USER_FORM_FAIL,
} from "../constants/FormConstants";

export const addUserReducer = (state = {}, action) => {
  // debugger;
  switch (action.type) {
    case USER_FORM_REQUEST:
      return { loading: true };
    case USER_FORM_SUCCESS:
      return { loading: false, empInfo: action.payload };
    case USER_FORM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
