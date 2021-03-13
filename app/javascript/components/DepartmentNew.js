import React from 'react';

const DepartmentNew = ({ department }) => {
  const { title, errors } = department
  const defaultTitle = title ? title : ""
  return(
    <>
      <h1>Add Department</h1>
      { errors && errors }
      <form action="/departments/" method="post">
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultTitle}
          name="department[title]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default DepartmentNew;