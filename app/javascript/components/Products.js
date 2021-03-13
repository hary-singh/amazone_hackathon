import React from "react";

const Products = ({ products, department }) => {
    const { title, id } = department;
    return (
      <>
        <h1>Products From {title} Departments</h1>
        <a href={`/departments/${id}/products/new`}>Add Product</a>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <a href={`/departments/${department.id}/products/${product.id}`}>  Product show  </a><br/>
            <a href={`/departments/${department.id}/products/${product.id}/edit`}>  Product Edit  </a><br/> 
            <a href={`/departments/${department.id}/products/${product.id}`} data-method="delete"><br/>
               Product Delete
            </a>
          </div>
        ))}
        <hr/>
        <a href={`/departments/${id}`}>Go Back</a>
        <br />
        <a href={`/departments`}>Back To Departments</a>
      </>
    );
}

export default Products;