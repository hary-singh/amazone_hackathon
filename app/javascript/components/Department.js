import React from 'react';

const Department = ({ department }) => {
  const { title } = department
  return (
    <>
      <h1>Department: {title}</h1>
      <hr />
      <a href={`/department/${id}/products`}>Products</a>
      
    </>
  )
}

export default Department;