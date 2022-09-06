import './App.css';
import React, {useState} from 'react';
import AddEmployee from "./AddEmployee";
import Header from "./Header";
import EmployeeList from "./EmployeeList";

function App() {
//   const employees = [
//     {
//         id: "1",
//         name: "Ahad Khan",
//         email: "ahadkhan@gmail.com"
//     },
//     {
//         id: "2",
//         name: "Tom Jones",
//         email: "tomjones@gmail.com"
//     }
// ]
  const [employees, setEmployees] = useState([]);
  
  return (
    <>
      <div className='ui container'>
        <Header/>
        <AddEmployee/>
        <EmployeeList employees= {employees}/>
      </div>
    </>
  );
}

export default App;
