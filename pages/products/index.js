import React from "react";
import Layout from "../../components/layout/layout";
import ProductList from "../../components/products/product-list";
import commerce from "../../utils/commerce";
import RouteTransition from "../../utils/route-transition";

const Products = ({ products }) => {
  return (
    <RouteTransition>
      <ProductList products={products} />
    </RouteTransition>
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
