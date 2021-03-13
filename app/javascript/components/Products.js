import React from "react";

const Products = ({ department , products }) => {
    const { title, id } = department;
    return (
      <>
        <h1>Products From {title} Departments</h1><br/>
        <a href={`/departments/${id}/products/new`}>Add a new Product</a><br/>
        <a href={`/departments/${id}`}>Back</a>
        <br />
        <a href={`/`}>Back To Departments</a>
        {products.map((product) => (
          <div key={product.id} className="product-card">
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