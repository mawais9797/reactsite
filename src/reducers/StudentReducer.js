const initialState = {
  studentData: [],
  editStudent: [],
  studentLogin: {},
};

const studentReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "ADD_STUDENT_DATA":
      return {
        ...state,
        studentData: [...state.studentData, action.payload],
      };
    case "LOGIN_STUDENTS":
      debugger;
      return {
        ...state,
        studentLogin: action.payload,
      };
    case "EDIT_THIS_USER":
      return { ...state, editStudent: action.payload };

    case "UPDATE_THIS STUDENT":
      return { ...state, studentData: action.payload };

    case "DELETE_STUDENT_DATA":
      return {
        ...state,
        studentData: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
