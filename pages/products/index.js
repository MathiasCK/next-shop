import React from "react";
import Layout from "../../components/layout/layout";
import ProductList from "../../components/products/product-list";
import { useProducts } from "../../context/CartContext";
import commerce from "../../utils/commerce";
import RouteTransition from "../../utils/route-transition";

const Products = () => {
  return (
    <RouteTransition>
      <ProductList />
    </RouteTransition>
  );
};

export default Products;
