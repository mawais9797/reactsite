import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const EmployeeData = () => {
  const [myUser, setMyUser] = useState([]);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const empData = useSelector((state) => state.empData);
  const users = useSelector((state) => state.users);
  // debugger;
  // setMyUser([...myUser, users]);
  // debugger;
  // const { empInfo } = empData;
  // debugger;
  // useEffect(() => {
  //   setMyUser([...myUser, users]);
  //   // Navigate(`/home?${email}`);
  // }, [users]);
  //   setMyUser([...myUser, empInfo]);
  //   //   setUserValue([...userValue, values]);
  // setMyUser([...myUser, empInfo]);

  function handleDelete(event) {
    event.preventDefault();
    alert(userId);
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
            {Object.values(users).map((x, index) => {
              return (
                <>
                  <tr className="table-light">
                    <th scope="row">{x.id}</th>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.company}</td>
                    <td>{x.role}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info"
                        style={{ marginRight: "5px" }}
                        onClick={() => navigate(`/useredit?id=${x.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={(e) => setUserId(x.id)}
                      >
                        Delete
                      </button>
                    </td>
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

export default EmployeeData;
