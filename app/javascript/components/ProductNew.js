import React from "react";


const ProductNew = ({ product, department }) => {
    const { id } = department;
    const { name, price, stock, description, errors } = product;
    const defaultName = name ? name : "";
    const defaultPrice = price ? price : 0;
    const defaultStock = stock ? stock : 0;
    const defaultDescription = description ? description : "";
    return (
      <>
        <h1>Product New</h1>
        {errors && errors}
        <form action={`/departments/${id}/products`} method="post">
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="product[name]"
        />
        <input
          placeholder="Price"
          type="number"
          defaultValue={defaultPrice}
          name="product[price]"
        />
        <input
          placeholder="Stock"
          type="number"
          defaultValue={defaultStock}
          name="product[stock]"
        />

        <input
          placeholder="Description"
          type="text"
          defaultValue={defaultDescription}
          name="product[description]"
        />
          <button type="submit"> Add Product</button>
        </form>
      </>
    );
}

export default ProductNew;