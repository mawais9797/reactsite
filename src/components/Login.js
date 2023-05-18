import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is REQUIRED"),
    password: Yup.string().required("Password is REQUIRED"),
  });

  const handleSubmit = (values) => {
    console.log("my values");
    console.log(values);
    const uid = axios.post("http://localhost:4000/login", values);
    console.log("user data");
    if (uid != "" || uid != undefined) {
      navigate("/");
    }
  };
  return (
    <div>
      <h2>User Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email"> User Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>
          <span></span>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
          <redirect to="/home" />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
