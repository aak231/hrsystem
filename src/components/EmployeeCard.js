import React from "react";
import user from "../images/user.png";

const EmployeeCard = (props) => {
  const { id, name, email } = props.employee;
  return (
    <>
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div style={{marginTop: "3px"}}>{email}</div>
        </div>
        <div class="right floated content">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px"}}
        ></i>
        </div>
        
      </div>
    </>
  );
};

export default EmployeeCard;
