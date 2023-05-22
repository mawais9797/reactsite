import { USER_FORM_SUCCESS } from "../constants/FormConstants";

const initialState = {
  empData: [],
};
export function addUserReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case USER_FORM_SUCCESS:
      return {
        ...state,
        empData: [...state.action, action.payload],
      };
  }
}

// export const addUserReducer = (state = {}, action) => {
//   // debugger;
//   switch (action.type) {
//     case USER_FORM_REQUEST:
//       return { loading: true };
//     case USER_FORM_SUCCESS:
//       return { loading: false, empInfo: action.payload };
//     case USER_FORM_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };
