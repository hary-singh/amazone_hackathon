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
          <br />
          <a href={`/`}>Back to Home</a>
          <br />
          <a href={`/departments/${department.id}`}>Back to Departments</a>
        </div>
      </>
    );
}

export default Product;