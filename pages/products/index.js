import React from "react";
import ProductList from "../../components/products/product-list";
import commerce from "../../utils/commerce";

const Products = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default Products;
