import './App.css';
import React from 'react';
import AddEmployee from "./AddEmployee";
import Header from "./Header";
import EmployeeList from "./EmployeeList";

function App() {
  return (
    <>
      <div className='ui container'>
        <Header/>
        <AddEmployee/>
        <EmployeeList/>
      </div>
    </>
  );
}

export default App;
