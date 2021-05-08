import Link from "next/link";
import Product from "./product";

import React from "react";
import Spinner from "../../utils/Spinner";
import RouteTransition from "../../utils/route-transition";
import { StyledProductList } from "../../styles/products/product-styles";
import { useProducts } from "../../context/CartContext";

const ProductList = () => {
  const products = useProducts();
  console.log(products);
  if (products.length === 0) return <Spinner />;

  return (
    <RouteTransition>
      <div>
        {/*
        {products.map((category) => {
          return (
            <>
              <center>
                <h1 style={{ padding: "1rem 0" }} className="header">
                  {category.name.toUpperCase()}
                </h1>
          </center>*/}
        <h1
          style={{ textAlign: "center", padding: "1rem 0" }}
          className="header"
        >
          All products
        </h1>
        <StyledProductList>
          {products.map((product) => (
            <div className="product">
              <li key={product.permalink}>
                <Link href={`/products/${product.permalink}`}>
                  <a>
                    <Product {...product} />
                  </a>
                </Link>
              </li>
            </div>
          ))}
        </StyledProductList>
        {/*  </>
         );
        })}/*/}
      </div>
    </RouteTransition>
  );
};

export default ProductList;
