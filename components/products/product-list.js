import Link from "next/link";
import Product from "./product";

import React from "react";
import styled from "styled-components";

const ProductList = ({ products }) => {
  if (products.length === 0) return null;

  return (
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
  );
};

const StyledProdutList = styled.div`
  padding-inline-start: 0 !important;
  list-style: none;
  //grid-gap: 1rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default ProductList;
