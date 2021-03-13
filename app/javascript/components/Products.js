import React from "react";

const Products = ({ product, department }) => {
    const { title, id } = department;
    return (
      <>
        <h1>Products From {title} Departments</h1>
        <a href={`/departments/${id}`}>back to sub show</a>
        <br />
        <a href={`/`}>Back To Departments</a>
        {product.map(() => (
          <div key={product.id} className="topic-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <a href={`/departments/${department.id}/products/${product.id}`}>  Product show  </a>
            <a href={`/departments/${department.id}/products/${product.id}/edit`}>  Product Edit  </a> 
            <a href={`/departments/${department.id}/products/${product.id}`} data-method="delete">
               Product Delete
            </a>
          </div>
        ))}
      </>
    );
}

export default Products;