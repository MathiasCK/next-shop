import Link from "next/link";
import Product from "./product";

import React from "react";

const ProductList = ({ products }) => {
  if (!products) return null;

  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
