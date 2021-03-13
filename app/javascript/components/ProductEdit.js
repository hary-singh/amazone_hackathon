import React from "react";

const ProductEdit = ({ product, department }) => {
    const { id } = product;
    const { name, price, stock, errors } = product;
    const defaultName = name ? name : "";
    const defaultPrice = price ? price : "";
    const defaultStock = stock ? stock : "";
    return (
      <>
        <h1>Product Edit</h1>
        {errors && errors}
        <form action={`/departments/${department.id}/products/${id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
          
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
          <button type="submit">update</button>
        </form>
      </>
    );
}

export default ProductEdit;