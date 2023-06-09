import React from "react";
import { Formik, FieldArray, Field, Form, ErrorMessage } from "formik";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../actions/StudentAction";
import { useNavigate } from "react-router-dom";

const StudentEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const studentEdit = useSelector((state) => state.students.editStudent);
  const allStudents = useSelector((state) => state.students);
  //   console.log("This is Edit Student =", studentEdit);
  let initialValues = null;
  if (studentEdit != undefined) {
    initialValues = {
      name: studentEdit[0].name,
      age: studentEdit[0].age,
      education: studentEdit[0].education.map((edu) => ({
        institution: edu.institution,
        degree: edu.degree,
        year: edu.year,
      })),
    };
    // debugger;
  } else {
    initialValues = {
      name: "",
      age: "",
      education: [{ institution: "", degree: "", year: "" }],
    };
  }

  const handleUpdate = (values, { resetForm }) => {
    const key = "id";
    values[key] = studentEdit[0].id;
    console.log("Student Update values =", values);
    dispatch(updateStudent(values, allStudents["studentData"]));
    resetForm();
    navigate("/studentlist");
    // Here, you can perform further actions like sending the data to a server or updating the state
  };

  return (
    <div>
      <Header />
      <br />
      <div className="signupForm">
        <h2>Student Edit Form</h2>
        <Formik initialValues={initialValues} onSubmit={handleUpdate}>
          {({ values }) => (
            <Form>
              <div className="formField">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>
              <br />
              <div className="formField">
                <label htmlFor="age">Age:</label>
                <Field
                  type="text"
                  id="age"
                  name="age"
                  className="form-control"
                />
              </div>
              <br />
              <h5>Education:</h5>
              <div className="formField">
                <FieldArray name="education">
                  {({ push, remove }) => (
                    <>
                      {values.education.map((_, index) => (
                        <div className="educationBorder">
                          <div key={index}>
                            <label htmlFor={`institution${index}`}>
                              Institution:
                            </label>
                            <Field
                              type="text"
                              id={`institution${index}`}
                              name={`education[${index}].institution`}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor={`degree${index}`}>Degree:</label>
                            <Field
                              type="text"
                              id={`degree${index}`}
                              name={`education[${index}].degree`}
                              className="form-control"
                            />
                            <br />
                            <label htmlFor={`year${index}`}>Year:</label>
                            <Field
                              type="text"
                              id={`year${index}`}
                              name={`education[${index}].year`}
                              className="form-control"
                            />
                            <br />
                            <button
                              className="btn btn-danger btn-md"
                              type="button"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </button>

                            <br />
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-warning btn-md"
                        onClick={() =>
                          push({ institution: "", degree: "", year: "" })
                        }
                      >
                        Add Education
                      </button>
                    </>
                  )}
                </FieldArray>
              </div>
              <br />
              <br />
              <button className="btn btn-success btn-md" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StudentEdit;
