import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img alt={props.data.name} src={props.data.picture}></img>
        <div className="info">
          <ul>
            <li>
              <strong>Name:</strong> {props.data.name}
            </li>
            <li>
              <strong>Role:</strong> {props.data.occupation}
            </li>
            <li>
              <strong>Employee ID:</strong> {props.data.id}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
