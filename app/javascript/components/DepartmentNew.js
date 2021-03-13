import React from 'react';

const DepartmentNew = ({ department }) => {
  const { name, errors } = department
  const defaultName = name ? name : ""
  return(
    <>
      <h1>Add Department</h1>
      { errors && errors }
      <form action="/departments" method="post">
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="department[name]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default DepartmentNew;