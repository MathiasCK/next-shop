import React from "react";
import ProductList from "../../components/products/product-list";
import { useCategories, useProducts } from "../../context/CartContext";

import RouteTransition from "../../utils/route-transition";

const Products = () => {
  const products = useProducts();
  const categories = useCategories();

  const productsPerCategory = categories.reduce((acc, category) => {
    return [
      ...acc,
      {
        ...category,
        productsData: products.filter((product) =>
          product.categories.find((cat) => cat.id === category.id)
        ),
      },
    ];
  }, []);
  return (
    <RouteTransition>
      <ProductList
        productsPerCategory={productsPerCategory}
        products={products}
      />
    </RouteTransition>
  );
};

export default Products;
