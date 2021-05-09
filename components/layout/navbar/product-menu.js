import React from "react";
import Link from "next/link";
import { StyledProductMenu } from "../../../styles/navbar/navbar-styles";

const ProductMenu = ({ filterProducts, categories, showProducts }) => {
  return (
    <StyledProductMenu onMouseLeave={showProducts}>
      <div className="nav-links">
        {categories &&
          categories.map((category) => (
            <Link href={`/categories/${category.name}`}>
              <p onClick={showProducts}>{category.name}</p>
            </Link>
          ))}
      </div>
      <div style={{ width: "80%", display: "flex" }}>
        {filterProducts.map((product) => (
          <Link href={`/products/${product.permalink}`}>
            <div style={{ width: "33%" }}>
              <p>{product.name}</p>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
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
