const initialState = {
  users: [],
  editUser: [],
};

const userReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "USER_TO_BE_EDIT":
      return {
        ...state,
        editUser: action.payload,
      };

    case "USER_HAS_UPDATE":
      return {
        ...state,
        users: action.payload,
      };

    case "DELETE_USER":
      // debugger;
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

// import {
//   USER_LOGIN_REQUEST,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_FAIL,
//   USER_LOGOUT,
// } from "../constants/UserConstatns";

// export const userLoginReducer = (state = {}, action) => {
//   // debugger;
//   switch (action.type) {
//     case USER_LOGIN_REQUEST:
//       return { loading: true };
//     case USER_LOGIN_SUCCESS:
//       return { loading: false, userInfo: action.payload };
//     case USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };
