import React from 'react';

const DepartmentNew = ({ department }) => {
  const { title, errors } = department
  const defaultTitle = title ? title : ""
  return(
    <>
      <h1>Add Department</h1>
      { errors && errors }
      <form action="/departments/new" method="post">
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