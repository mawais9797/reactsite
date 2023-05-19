import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/FormAction";
import { useLocation, useParams } from "react-router-dom";

const UserEdit = () => {
  const [userValue, setUserValue] = useState([]);
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
  const email = searchParams.get("email");
  const empData = useSelector((state) => state.empData);
  const { empInfo } = empData;
  console.log("employee information", empInfo);
  const userEdit = () => {
    console.log("this is empInfo = ", empInfo);
    const user = Object.values(empInfo).filter((emp) => emp.email === email);
    console.log("my user = ", user);
  };
  useEffect(() => {
    userEdit();
  }, [empInfo]);
  console.log(email);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    company: Yup.string().required("Company Name is required"),
    role: Yup.string().required("Please Select a Role "),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("here");
    console.log(values.company);
    setUserValue([...userValue, values]);
    dispatch(addUser(values));
    resetForm();
  };

  return (
    <div>
      <Header />
      <div className="container ">
        <br />
        <div className="signupForm">
          <h1>User Edit Form</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                Sign Up
              </button>
            </Form>
          </Formik>
        </div>
        <table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(userValue).map((x, index) => {
              return (
                <>
                  {console.log(x)}
                  <tr className="table-light">
                    <th scope="row">{index + 1}</th>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.company}</td>
                    <td>{x.role}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserEdit;
