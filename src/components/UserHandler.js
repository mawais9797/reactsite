import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeData from "./EmployeeData";

const UserHandler = () => {
  const dispatch = useDispatch();
  const { empInfo } = useSelector((state) => state.empInfo);

  //   const handleEdit = (email) => {
  //     alert(email);
  //     var [employee] = empInfo.filter((emp) => emp.email === email);
  //   };
  const handleEdit = (email) => {
    alert(email);
    // const [employee] = empInfo.filter((emp) => emp.email === email);
  };
  return (
    <div>
      <EmployeeData handleEdit={handleEdit} />
    </div>
  );
};

export default UserHandler;
