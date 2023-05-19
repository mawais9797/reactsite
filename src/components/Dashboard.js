import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/UserAction";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var userLogin = useSelector((state) => state.userLogin);
  var { userInfo } = userLogin;

  useEffect(() => {
    console.log("userInfo = ", userInfo);

    if (userInfo === null || userInfo === undefined || userInfo === "") {
      navigate("/login");
    } else {
      console.log("Else is here");
      // navigate("/login");
    }
    console.log("user login ", userInfo);
  }, [userInfo]);
  console.log("Dashboard UserInfo", userInfo);

  const handleLogout = () => {
    dispatch(logout());
    // localStorage.removeItem("userInfo");
    // navigate("/login");
  };
  return (
    <div>
      <h3>Dashboard</h3>
      <ul>
        <li>{userInfo.email}</li>
        <li>{userInfo.password}</li>
      </ul>
      <button className="btn btn-lg btn-info" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
