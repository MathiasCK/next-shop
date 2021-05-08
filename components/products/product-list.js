import Link from "next/link";
import Product from "./product";

import React from "react";
import Spinner from "../../utils/Spinner";
import RouteTransition from "../../utils/route-transition";
import { StyledProductList } from "../../styles/products/product-styles";
import { useProducts } from "../../context/CartContext";

const ProductList = () => {
  const products = useProducts();
  if (products.length === 0) return <Spinner />;

  return (
    <RouteTransition>
      <div>
        {products.map((category) => {
          return (
            <>
              <div>{category.name}</div>
              <StyledProductList>
                {category.productsData.map((product) => (
                  <li key={product.permalink}>
                    <Link href={`/products/${product.permalink}`}>
                      <a>
                        <Product {...product} />
                      </a>
                    </Link>
                  </li>
                ))}
              </StyledProductList>
            </>
          );
        })}
      </div>
    </RouteTransition>
  );
};

export default ProductList;
