import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/UserReducer";

// Define initial state


// User reducer

// debugger;
const middleware = [thunk];
// Create the Redux store
const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

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
