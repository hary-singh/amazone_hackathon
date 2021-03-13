import React from "react";

const ProductNew = ({ product, department }) => {
    const { id } = department;
    const { name, price, stock, errors } = product;
    const defaultName = name ? name : "";
    const defaultPrice = price ? price : "";
    const defaultStock = stock ? stock : "";
    return (
      <>
        <h1>Product New</h1>
        {errors && errors}
        <form action={`/departments/${id}/products`} method="post">
          <p>Name</p>
          <input defaultValue={defaultName} name="product[name]" type="text" />
          <p>price</p>
          <textarea defaultValue={defaultPrice} name="product[price]" type="number" />
          <p>Stock</p>
          <textarea defaultValue={defaultStock} name="product[stock]" type="number" />
          <br />
          <button type="submit">Add Product</button>
        </form>
      </>
    );
}

export default ProductNew;