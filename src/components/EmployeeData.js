import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { deleteUser, editUser, updateUser } from "../actions/Actions";

const EmployeeData = () => {
  const [myUser, setMyUser] = useState(
    useSelector((state) => state.users.users)
  );
  // debugger;
  const [userName, setUserName] = useState("");
  const [updateEmployee, setUpdateEmployee] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // let userFromStore = "";
  const userFromStore = useSelector((state) => state.users.editUser);
  // debugger;
  console.log("my user store", userFromStore);
  let initialValues = null;
  if (userFromStore != "") {
    // debugger;
    console.log("IF BLOCK");
    initialValues = {
      name: userFromStore[0].name,
      company: userFromStore[0].company,
      email: userFromStore[0].email,
      role: userFromStore[0].role,
    };
  } else {
    console.log("ELSE BLOCK");
    initialValues = {
      name: "",
      company: "",
      email: "",
      role: "",
    };
  }

  const validationSchema = Yup.object().shape({});

  useEffect(() => {
    console.log("Updated List", myUser);
  }, [myUser]);

  function handleDelete(id) {
    // setMyUser(users);

    // const userRemove = myUser.filter((employee) => employee.id === id);
    dispatch(deleteUser(id, myUser));
    // console.log("userRemove", userRemove);
    //setMyUser(updatedUsers);
  }

  function handleUpdateClick(id) {
    // debugger;
    // const userEdit = myUser.filter((employee) => employee.id == id);
    dispatch(editUser(id, myUser));
    // setUpdateEmployee(userEdit);
    // console.log("edit user", updateEmployee);
    navigate("/useredit");
  }

  function handleUpdate(values) {
    dispatch(updateUser(values, myUser));
    console.log("updated values", values);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Employee data</h2>
        <table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myUser == undefined
              ? console.log("yessss")
              : Object.values(myUser).map((x, index) => {
                  // debugger;
                  return (
                    <>
                      <tr className="table-light">
                        <th scope="row">{index + 1}</th>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.company}</td>
                        <td>{x.role}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-info"
                            style={{ marginRight: "5px" }}
                            onClick={() => handleUpdateClick(x.id)}
                          >
                            {/* onClick={() => handleUpdateClick(x.id)} */}
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={(e) => handleDelete(x.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            {}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeData;
