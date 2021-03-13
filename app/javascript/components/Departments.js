import React from "react";

const Departments = ({ department }) => {
  return (
    <>
      <h1>Departments</h1>
      <a href="/departments/new">Add Department</a>
      <br />
      <h2>{ departments.length <= 0 ? "No Department" : "" }</h2> 
      { department.map((department) => (
        <div>
          <a href={`/departments/${department.id}`}>{department.title}</a>
        </div>
      ))}
    </>
  )
}

export default Departments;