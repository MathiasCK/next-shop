import React from "react";
import Link from "next/link";
import { StyledProductMenu } from "../../../styles/navbar/navbar-styles";

const ProductMenu = ({ filterProducts, categories }) => {
  return (
    <StyledProductMenu
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        {categories &&
          categories.map((category) => (
            <Link href={`/categories/${category.name}`}>
              <p>{category.name}</p>
            </Link>
          ))}
      </div>
      <div style={{ display: "flex" }}>
        {filterProducts.map((product) => (
          <Link href={`/products/${product.permalink}`}>
            <div>
              <p>{product.name}</p>
              <img
                style={{ width: "100px", height: "100px" }}
                src={product.assets[0].url}
              />
            </div>
          </Link>
        ))}
      </div>
    </StyledProductMenu>
  );
};

export default ProductMenu;
