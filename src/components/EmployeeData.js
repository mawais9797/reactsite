import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { deleteUser, editUser, updateUser } from "../actions/Actions";

const EmployeeData = () => {
  const [myUser, setMyUser] = useState(useSelector((state) => state.users));
  // debugger;
  const [userName, setUserName] = useState("");
  const [updateEmployee, setUpdateEmployee] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // let userFromStore = "";
  const userFromStore = useSelector((state) => state.editUser);
  // debugger;
  console.log("my user store", userFromStore);
  let initialValues = null;
  if (userFromStore != "") {
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
    const userEdit = myUser.filter((employee) => employee.id == id);
    dispatch(editUser(userEdit));
    setUpdateEmployee(userEdit);
    console.log("edit user", updateEmployee);
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
                            {/* onClick={() => navigate(`/useredit?id=${x.id}`)} */}
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
      {updateEmployee != "" ? (
        <>
          <div className="signupForm">
            <h1>User Update Form</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleUpdate}
            >
              <Form>
                <div className="formField">
                  <label htmlFor="name" className="formLabel">
                    Name
                  </label>
                  <br />
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control "
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="error errMsg"
                  />
                </div>
                <span></span>

                <div className="formField">
                  <label htmlFor="exampleInputEmail1" className="formLabel">
                    Email address
                  </label>
                  <Field
                    type="text"
                    className="form-control "
                    id="exampleInputEmail1"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error errMsg"
                  />
                  <span></span>
                </div>

                <div className="formField">
                  <label htmlFor="myCompany" className="formLabel">
                    Company
                  </label>
                  <br />

                  {userFromStore[0].company == "AppsGenii" ? (
                    <>
                      <Field
                        as="select"
                        name="company"
                        id="myCompany"
                        className="form-control formField"
                      >
                        <option value="AppsGenii">AppsGenii</option>
                        <option value="Google">Google</option>
                        <option value="Facebook" selected>
                          Facebook
                        </option>
                      </Field>
                      <ErrorMessage
                        name="company"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  ) : userFromStore[0].company == "Google" ? (
                    <>
                      <Field
                        as="select"
                        name="company"
                        id="myCompany"
                        className="form-control formField"
                      >
                        <option value="AppsGenii">AppsGenii</option>
                        <option value="Google" selected>
                          Google
                        </option>
                        <option value="Facebook">Facebook</option>
                      </Field>
                      <ErrorMessage
                        name="company"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  ) : userFromStore[0].company == "Facebook" ? (
                    <>
                      <Field
                        as="select"
                        name="company"
                        id="myCompany"
                        className="form-control formField"
                      >
                        <option value="AppsGenii">AppsGenii</option>
                        <option value="Google">Google</option>
                        <option value="Facebook" selected>
                          Facebook
                        </option>
                      </Field>
                      <ErrorMessage
                        name="company"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  ) : (
                    <>
                      <Field
                        as="select"
                        name="company"
                        id="myCompany"
                        className="form-control formField"
                      >
                        <option value="">-- Select Company --</option>
                        <option value="AppsGenii">AppsGenii</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                      </Field>
                      <ErrorMessage
                        name="company"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  )}
                </div>
                <span></span>

                <div className="formField">
                  <label htmlFor="role" className="formLabel">
                    Role
                  </label>
                  <br />
                  {userFromStore[0].role == "Intern" ? (
                    <>
                      {console.log("i am intern")}
                      <Field
                        as="select"
                        name="role"
                        id="role"
                        className="form-control formField"
                      >
                        <option value="Intern" selected>
                          Intern
                        </option>
                        <option value="Developer">Developer</option>
                        <option value="CTO">CTO</option>
                      </Field>
                      <ErrorMessage
                        name="role"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  ) : userFromStore[0].role == "Developer" ? (
                    <>
                      {console.log("i am Developer")}
                      <Field
                        as="select"
                        name="role"
                        id="role"
                        className="form-control formField"
                      >
                        <option value="Intern">Intern</option>
                        <option value="Developer" selected>
                          Developer
                        </option>
                        <option value="CTO">CTO</option>
                      </Field>
                      <ErrorMessage
                        name="role"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  ) : userFromStore[0].role == "CTO" ? (
                    <>
                      {console.log("i am CTO")}
                      <Field
                        as="select"
                        name="role"
                        id="role"
                        className="form-control formField"
                      >
                        <option value="Intern">Intern</option>
                        <option value="Developer">Developer</option>
                        <option value="CTO" selected>
                          CTO
                        </option>
                      </Field>
                      <ErrorMessage
                        name="role"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  ) : (
                    <>
                      {console.log("i am NEW USER ")}
                      <Field
                        as="select"
                        name="role"
                        id="role"
                        className="form-control formField"
                      >
                        <option>-- Select a Role --</option>
                        <option value="Intern">Intern</option>
                        <option value="Developer">Developer</option>
                        <option value="CTO">CTO</option>
                      </Field>
                      <ErrorMessage
                        name="role"
                        component="span"
                        className="error errMsg"
                      />
                    </>
                  )}
                </div>
                <span></span>

                <br />

                <button
                  className="btn btn-lg btn-success rounded"
                  type="submit"
                >
                  Edit User
                </button>
              </Form>
            </Formik>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EmployeeData;
