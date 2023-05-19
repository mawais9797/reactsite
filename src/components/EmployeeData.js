import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const EmployeeData = ({ handleEdit }) => {
  const [myUser, setMyUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const empData = useSelector((state) => state.empData);
  const { empInfo } = empData;

  useEffect(() => {
    setMyUser([...myUser, empInfo]);
    // Navigate(`/home?${email}`);
  }, [empInfo]);
  //   setMyUser([...myUser, empInfo]);
  //   //   setUserValue([...userValue, values]);
  // setMyUser([...myUser, empInfo]);

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
            {Object.values(myUser).map((x, index) => {
              return (
                <>
                  {console.log(x)}
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
                        onClick={() => navigate(`/useredit?email=${x.email}`)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Delete</button>
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
