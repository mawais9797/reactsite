import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  console.log("user login ", userInfo);
  return (
    <div>
      <h3>Dashboard</h3>
      <ul>
        <li>{userInfo.email}</li>
        <li>{userInfo.password}</li>
      </ul>
    </div>
  );
};

export default Dashboard;
