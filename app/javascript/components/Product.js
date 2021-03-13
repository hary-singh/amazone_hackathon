import React from "react";

const Product = ({ product, department }) => {
    const { name, price, stock, description } = product
    return (
      <>
        <div className="product-card">
          <h1>Product: {name}</h1>
          <h3>Department: {department.title}</h3>
          <p>Price: {price}</p>
          <p>Stock remaining: {stock}</p>
          <p>Product description: {description}</p>
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