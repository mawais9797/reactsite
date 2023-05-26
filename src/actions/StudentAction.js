import axios from "axios";

// export const addStudent = (student) => {
//   //   debugger;
//   return {
//     type: "ADD_STUDENT_DATA",
//     payload: student,
//   };
// };

export const editStudent = (student) => {
  return {
    type: "EDIT_THIS_USER",
    payload: student,
  };
};

export const newData = (student) => {
  debugger;
  return {
    type: "LOGIN_STUDENT",
    payload: student,
  };
};

export const loginStudent = async (user) => {
  debugger;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const email = user.email;
  const password = user.password;

  const { data } = await axios.post(
    "http://localhost:4000/login",
    { email, password },
    config
  );
  debugger;
  return {
    type: "LOGIN_STUDENT",
    payload: data,
  };

  // console.log("user Login data", student.data);
  debugger;
};

export const newLogin = async (user) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const email = user.email;
    const password = user.password;

    const { data } = await axios.post(
      "http://localhost:4000/login",
      { email, password },
      config
    );
    debugger;
    if (data) {
      return {
        type: "LOGIN_STUDENTS",
        payload: data,
      };
    }
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred during login."); // Throw an error to be caught by the caller
  }
};

// export const newLogin = async (user) => {
//   debugger;
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const email = user.email;
//     const password = user.password;

//     let res = await axios.post(
//       "http://localhost:4000/login",
//       { email, password },
//       config
//     );
//     debugger;
//     if (res) {
//       return {
//         type: "LOGIN_STUDENT",
//         payload: res.data,
//       };
//     }
//   } catch (error) {
//     alert(error);
//   }
// };
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
