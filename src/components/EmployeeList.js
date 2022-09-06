import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
  console.log(props);

  const renderEmployeeList = props.employees.map((employee) => {
    return <EmployeeCard employee={employee}> </EmployeeCard>;
  });
  return (
    <>
      <div className="ui large celled list">{renderEmployeeList}</div>
    </>
  );
};

export default EmployeeList;
