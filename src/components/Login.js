import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/UserAction";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { loginStudent, newData, newLogin } from "../actions/StudentAction";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is REQUIRED"),
    password: Yup.string().required("Password is REQUIRED"),
  });

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const navigate = useNavigate();

  // const redirect = location.search ? location.search.split("=")[1] : "/";
  // useEffect(() => {
  //   // if (userInfo) {
  //   //   navigate("/dashboard");
  //   //   console.log("iffff");
  //   // } else {
  //   //   console.log("elssssee");
  //   //   navigate("/login");
  //   // }
  // }, [navigate, userInfo]);

  const handleSubmit = async (values) => {
    console.log("my values");
    console.log(values);

    dispatch(newLogin(values));
  };
  return (
    <div>
      <Header />
      <div className="container">
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
    </div>
  );
};

export default Login;
