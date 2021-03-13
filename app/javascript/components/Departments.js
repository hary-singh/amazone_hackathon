import React from "react";

const Departments = ({ departments }) => {
  return (
    <>
      <h1>Departments</h1>
      <a href="/department/new">Add Department</a>
      <br />
      <h2>{ courses.length <= 0 ? "No Department" : "" }</h2> 
      { departments.map((department) => (
        <div>
          <a href={`/department/${department.id}`}>{department.name}</a>
        </div>
      ))}
    </>
  )
}

export default Departments;