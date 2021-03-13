import React from "react";

const ProductEdit = ({ product, department }) => {
    const { id } = product;
    const { name, price, stock, description, errors } = product;
    return (
      <>
        <h1>Product Edit</h1>
        {errors && errors}
        <form action={`/departments/${department.id}/products/${id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
          <p>Name</p>
          <input defaultValue={name} name="product[name]" type="text" />
          <p>Price</p>
          <textarea defaultValue={price} name="product[price]" />
          <p>Stock</p>
          <textarea defaultValue={stock} name="product[stock]" />
          <p>Description</p>
          <textarea defaultValue={description} name="product[description]" /><br/>
          <button type="submit">update</button>
        </form>
      </>
    );
}

export default ProductEdit;