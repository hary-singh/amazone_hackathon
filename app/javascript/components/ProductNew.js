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
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="Product[name]"
        />
        <input
          placeholder="Balance"
          type="number"
          defaultValue={defaultPrice}
          name="Product[Price]"
        />
        <input
          placeholder="Stock"
          type="number"
          defaultValue={defaultStock}
          name="Product[stock]"
        />
          <button type="submit"> Add Product</button>
        </form>
      </>
    );
}

export default ProductNew;