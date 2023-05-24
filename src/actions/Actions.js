export const addUser = (user) => {
  //   debugger;
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const editUser = (id, allUsers) => {
  const userEdit = allUsers.filter((user) => user.id === id);
  return {
    type: "USER_TO_BE_EDIT",
    payload: userEdit,
  };
};

export const deleteUser = (id, allUsers) => {
  // const updatedUsers = allUsers.map((user) =>
  //   user.email !== userRemove.email ? userRemove : user
  // );
  // );
  const list = allUsers.filter((employee) => employee.id !== id);
  debugger;
  // console.log("deleting this USER", userRemove);
  console.log("Updated LIST after DELETE", list);
  return {
    type: "DELETE_USER",
    payload: list,
  };
};

export const updateUser = (values, allUsers) => {
  debugger;

  console.log("Action allUsers =", allUsers);
  console.log("Action Values =", values);

  const updatedUsers = allUsers.map((user) =>
    user.id === values.id ? values : user
  );
  debugger;
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
