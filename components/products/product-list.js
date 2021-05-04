import Link from "next/link";
import Product from "./product";

import React from "react";
import styled from "styled-components";
import Spinner from "../../utils/Spinner";
import RouteTransition from "../../utils/route-transition";

const ProductList = ({ products }) => {
  if (products.length === 0) return <Spinner />;

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

const StyledProdutList = styled.div`
  padding-inline-start: 0 !important;

  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default ProductList;
