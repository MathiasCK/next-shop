import Link from "next/link";
import Product from "./product";

import React from "react";
import Spinner from "../../utils/Spinner";
import RouteTransition from "../../utils/route-transition";
import { StyledProdutList } from "../../styles/products/product-styles";

const ProductList = ({ products }) => {
  if (products.length === 0) return <Spinner />;
  console.log(products);
  return (
    <RouteTransition>
      <StyledProdutList>
        {products.map((product) => (
          <li key={product.permalink}>
            <Link href={`/products/${product.permalink}`}>
              <a>
                <Product {...product} />
              </a>
            </Link>
          </li>
        ))}
      </StyledProdutList>
    </RouteTransition>
  );
};

export default ProductList;
