import React, { useState } from "react";

const AddEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
  });

  const addEmployee = (event) => {
    event.preventDefault();
    if (newEmployee.name === "" || newEmployee.email === "") {
      alert("All fields are mandotary to add an employee");
      return;
    }
    console.log(newEmployee);
  };
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // the : and [name] is for dynamic allocation of the new employee
    setNewEmployee({ ...newEmployee, [name]: value });
  };
  return (
    <>
      <div className="ui main">
        <br />
        <h2>Add Employee</h2>
        <form className="ui form" onSubmit={addEmployee}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleInput}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={handleInput}
            />
          </div>
          <button className="ui button purple"> Add</button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
