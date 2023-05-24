import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/FormAction";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { filter, userEdit } from "fontawesome";
import { updateUser } from "../actions/Actions";

const UserEdit = () => {
  // const [userValue, setUserValue] = useState([]);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState();
  // const [company, setCompany] = useState("");
  // const [role, setRole] = useState("");
  // const [email, setEmail] = useState();
  // const [editUser, setEditUser] = useState();
  const editUser = useSelector((state) => state.users.editUser);
  const allUsers = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  // debugger;
  let initialValues = null;
  if (editUser != undefined) {
    initialValues = {
      name: editUser[0].name,
      company: editUser[0].company,
      email: editUser[0].email,
      role: editUser[0].role,
    };
  } else {
    initialValues = {
      name: "",
      company: "",
      email: "",
      role: "",
    };
  }

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // setEditUser(user);
  //   // debugger;
  //   // console.log("SELECTED User =", user[0]);
  // }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    company: Yup.string().required("Company Name is required"),
    role: Yup.string().required("Please Select a Role "),
  });

  const handleUpdate = (values) => {
    // debugger;
    const key = "id";
    values[key] = editUser[0].id;
    console.log("here");
    console.log(allUsers);
    debugger;
    dispatch(updateUser(values, allUsers));

    // setUserValue([...userValue, values]);
    // dispatch(addUser(values));
    navigate("/employeedata");
  };

  return (
    <div>
      <Header />
      <div className="container ">
        <br />
        {userEdit != "" ? (
          <>
            <div className="signupForm">
              <h1>User Edit Form</h1>
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
                      className="form-control  "
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

                    {userEdit[0].company == "AppsGenii" ? (
                      <>
                        <Field
                          as="select"
                          name="company"
                          id="myCompany"
                          className="form-control formField"
                        >
                          <option value="AppsGenii" selected>
                            AppsGenii
                          </option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                        </Field>
                        <ErrorMessage
                          name="company"
                          component="span"
                          className="error errMsg"
                        />
                      </>
                    ) : userEdit[0].company == "Google" ? (
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
                    ) : userEdit[0].company == "Facebook" ? (
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
                    {/* <Field
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
                  /> */}
                  </div>
                  <span></span>

                  <div className="formField">
                    <label htmlFor="role" className="formLabel">
                      Role
                    </label>
                    <br />
                    <Field
                      as="select"
                      name="role"
                      id="role"
                      className="form-control formField"
                    >
                      <option value="">-- Select A Role --</option>
                      <option value="Intern">Intern</option>
                      <option value="Developer">Developer</option>
                      <option value="CTO">CTO</option>
                    </Field>
                    <ErrorMessage
                      name="role"
                      component="span"
                      className="error errMsg"
                    />
                  </div>
                  <span></span>

                  <br />

                  <button className="btn btn-lg btn-success " type="submit">
                    Edit
                  </button>
                </Form>
              </Formik>
            </div>
          </>
        ) : (
          <>
            <h2>NO Data</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default UserEdit;
