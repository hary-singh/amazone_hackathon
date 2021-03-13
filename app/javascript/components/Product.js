import React from "react";

const Product = ({ product, department }) => {
    const { name, price, stock } = topic
    return (
      <>
        <div className="product-card">
          <h1>Product: {name}</h1>
          <h6>Department: {department.name}</h6>
          <p>{price}</p>
          <p>{stock}</p>
          <a href={`/departments`}>Departments</a>
          <br />
          <a href={`/`}>Back Departments</a>
          <br />
          <a href={`/departments/${department.id}`}>Department Show</a>
        </div>
      </>
    );
}

export default Product;