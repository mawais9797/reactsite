import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, editStudent } from "../actions/StudentAction";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [myUser, setMyUser] = useState(useSelector((state) => state.students));
  //   const data = useSelector((state) => state.students);
  //   console.log("dataaaaaaaaa", data);
  //   setMyUser(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("Students Data", myUser);
  //   useEffect(() => {
  //     console.log("useEffect is working", myUser);
  //   }, [myUser]);
  function handleUpdateClick(id) {
    console.log("UPDATE ID =", id);
    const editUser = myUser["studentData"].filter(
      (student) => student.id === id
    );
    dispatch(editStudent(editUser));
    navigate("/studentedit");
  }

  function handleDelete(id) {
    console.log("USER ID =", id);
    debugger;
    dispatch(deleteStudent(id, myUser["studentData"]));
  }

  return (
    <div>
      <Header />

      <div className="container">
        <h2>Student data</h2>
        <table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col"> Name</th>
              <th scope="col">age</th>
              <th scope="col">Education</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myUser == undefined
              ? console.log("yessss")
              : Object.values(myUser["studentData"]).map((x, index) => {
                  return (
                    <>
                      <tr className="table-light">
                        <th scope="row">{x.id}</th>
                        <td>{x.name}</td>
                        <td>{x.age}</td>

                        <td>
                          {Object.values(x.education).map((edu, index) => {
                            return (
                              <ul>
                                <li>{edu.institution}</li>
                                <li>{edu.degree}</li>
                                <li>{edu.year}</li>
                              </ul>
                            );
                          })}
                        </td>
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
    </div>
  );
};

export default StudentList;
