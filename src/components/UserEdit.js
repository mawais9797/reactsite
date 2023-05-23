import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/FormAction";
import { useLocation, useParams } from "react-router-dom";
import { filter } from "fontawesome";

const UserEdit = () => {
  const [userValue, setUserValue] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  // const [email, setEmail] = useState();
  // const [editUser, setEditUser] = useState();
  const initialValues = {
    name: "",
    company: "",
    email: "",
    role: "",
  };

  const dispatch = useDispatch();
  //   const { email } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const empData = useSelector((state) => state.users);
  const id = searchParams.get("id");
  const user = empData.filter((emp) => emp.id == id);
  // setEmail(userEmail);
  // debugger;
  // const { empInfo } = empData;
  // console.log("employee information", empInfo);
  // const userEdit = () => {
  //   // console.log("this is empInfo = ", empInfo);
  //   const user = Object.keys(empInfo); //Object.values(empInfo);
  //   console.log("my user = ", user);
  // };
  useEffect(() => {
    // setEditUser(user);
    // debugger;
    // console.log("SELECTED User =", user[0]);
  }, [id]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    company: Yup.string().required("Company Name is required"),
    role: Yup.string().required("Please Select a Role "),
  });

  const handleUpdate = (values, { resetForm }) => {
    console.log("here");
    console.log(values);
    // setUserValue([...userValue, values]);
    // dispatch(addUser(values));
    resetForm();
  };

  return (
    <div>
      <Header />
      <div className="container ">
        <br />
        {user != "" ? (
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
                      value={user[0].name}
                      onChange={(e) => setName(e.target.name.value)}
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
                      value={user[0].email}
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

                    {user[0].company == "Google"
                      ? console.log("i am ", user[0].company)
                      : console.log("i am not any comapny")}
                    {user[0].company == "AppsGenii" ? (
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
                    ) : user[0].company == "Google" ? (
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
                    ) : user[0].company == "Facebook" ? (
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
