import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

const employeeData = [
  {
    id: "0",
    name: "Sebastian",
    occupation: "Sales",
    picture: "https://via.placeholder.com/200",
  },
  {
    id: "1",
    name: "Sierra",
    occupation: "Management",
    picture: "https://via.placeholder.com/200",
  },
  {
    id: "2",
    name: "Sheila",
    occupation: "Accounting",
    picture: "https://via.placeholder.com/200",
  },
  {
    id: "3",
    name: "Scott",
    occupation: "Reception",
    picture: "https://via.placeholder.com/200",
  },
  {
    id: "4",
    name: "Bess",
    occupation: "Human Resources",
    picture: "https://via.placeholder.com/200",
  },
  {
    id: "5",
    name: "Mike",
    occupation: "Sales",
    picture: "https://via.placeholder.com/200",
  },
  {
    id: "6",
    name: "Katie",
    occupation: "Management",
    picture: "https://via.placeholder.com/200",
  },
];

function App() {
  const [department, setDepartment] = React.useState("All");
  let currentView = employeeData;
  if (department !== "All") {
    currentView = employeeData.filter(
      (employee) => employee.occupation === department
    );
  }
  const changeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div className="App">
      <div id="hero">
        <header id="title">Employee Directory</header>
        <div id="filter">
          <label id="department-label">Choose a department</label>
          <select id="departmnet-select" onChange={changeDepartment}>
            <option value="All">All</option>
            <option value="Management">Management</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Sales">Sales</option>
            <option value="Accounting">Accounting</option>
            <option value="Reception">Reception</option>
          </select>
        </div>
        <main id="directory">
          {currentView.map((employee, i) => (
            <EmployeeCard key={i} data={employee} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
