export const addStudent = (student) => {
  //   debugger;
  return {
    type: "ADD_STUDENT_DATA",
    payload: student,
  };
};

export const editStudent = (student) => {
  return {
    type: "EDIT_THIS_USER",
    payload: student,
  };
};

export const updateStudent = (student, allStudents) => {
  debugger;
  const updatedList = allStudents.map((user) =>
    user.id === student.id ? student : user
  );
  debugger;
  return {
    type: "UPDATE_THIS STUDENT",
    payload: updatedList,
  };
};

export const deleteStudent = (id, allUsers) => {
  console.log("type of", typeof allUsers);
  debugger;
  const list = allUsers.filter((student) => student.id !== id);
  debugger;
  return {
    type: "DELETE_STUDENT_DATA",
    payload: list,
  };
};
