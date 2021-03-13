import React from "react";
const Departments = ({ departments }) => {
  return (
    <>
      <h1>Departments</h1>
      <a href="/departments/new">Add Department</a>
      <br />
      <h2>{ departments.length <= 0 ? "No Department" : "" }</h2> 
      { departments.map((department) => (
        <div>
          <h3><a href={`/departments/${department.id}`}>{department.title}</a></h3>
          <br />
          <a href={`/departments/${department.id}/edit`}>Edit Department</a>
          <br />
          <a href={`/departments/${department.id}`} data-method="delete">
               Delete Department
            </a><hr/>
        </div>
      ))}
    </>
  )
}
export default Departments;