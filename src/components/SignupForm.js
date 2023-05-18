import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
// import { FontAwesomeIcon } from "@fortAwesomeIcon/react-fontawesom";

const SignupForm = () => {
  const [userValue, setUserValue] = useState([]);
  const initialValues = {
    name: "",
    company: "",
    role: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    company: Yup.string().required("Company Name is required"),
    role: Yup.string().required("Please Select a Role "),
  });

  const handleSubmit = (values) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 4));
    //   setSubmitting(false);
    // }, 500);

    console.log("here");
    console.log(values);
    setUserValue([...userValue, values]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" className="inputField" />
              <ErrorMessage
                name="name"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>

            <div>
              <label htmlFor="company">Company</label>
              <Field
                type="text"
                id="company"
                name="company"
                className="inputField"
              />
              <ErrorMessage
                name="company"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>

            <div>
              <label htmlFor="role"> Role </label>
              <Field as="select" name="role" id="role" className="inputField">
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
            <button className="btn btn-lg btn-success rounded" type="submit">
              Sign Up
            </button>
          </Form>
        </Formik>
        <table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Employee Name</th>
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

export default SignupForm;
