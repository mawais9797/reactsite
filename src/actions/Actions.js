import { useSelector } from "react-redux";

export const addUser = (user) => {
  //   debugger;
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const editUser = (userEdit) => {
  // debugger;
  return {
    type: "USER_TO_BE_EDIT",
    payload: userEdit,
  };
};

export const updateUser = (values, allUsers) => {
  // debugger;

  console.log("Action allUsers =", allUsers);
  console.log("Action Values =", values);

  const updatedUsers = allUsers.map((user) =>
    user.email === values.email ? values : user
  );
  //   if (user.id == values.id) {
  //     allUsers[user] = values;
  //   }
  // });
  // console.log("updatedUser", updatedUsers);
  return {
    type: "USER_HAS_UPDATE",
    payload: updatedUsers,
  };
};
