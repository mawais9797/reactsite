import { createStore } from "redux";

// Define initial state
const initialState = {
  users: [],
  editUser: null,
};

// User reducer
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

    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(userReducer);

export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { userLoginReducer } from "./reducers/UserReducer";
// import { addUserReducer } from "./reducers/FormReducer";

// const reducer = combineReducers({
//   // userLogin: userLoginReducer,
//   empData: addUserReducer,
// });

// // const userInfoFromStorage = localStorage.getItem("userInfo")
// //   ? JSON.parse(localStorage.getItem("userInfo"))
// //   : null;

// // const empInfoFromStorage = localStorage.getItem("empInfo")
// //   ? JSON.parse(localStorage.getItem("empInfo"))
// //   : null;

// // const initialState = {
// //   userLogin: { userInfo: userInfoFromStorage },
// //   empData: { empInfo: empInfoFromStorage },
// // };

// const middleware = [thunk];

// const store = createStore(
//   addUserReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
