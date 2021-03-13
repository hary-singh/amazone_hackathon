import React from 'react';

const Department = ({ department }) => {
  const { title , id } = department
  return (
    <>
      <h1>Department: {title}</h1>
      <hr />
      <a href={`/departments/${id}/products`}>Products</a>
      
    </>
  )
}

export default Department;