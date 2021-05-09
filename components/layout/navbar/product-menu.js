import React from "react";
import Link from "next/link";
import {
  StyledProductMenu,
  ProductImage,
} from "../../../styles/navbar/navbar-styles";

const ProductMenu = ({ filterProducts, setToTrue, setToFalse, categories }) => {
  return (
    <StyledProductMenu>
      <div className="nav-links">
        {categories &&
          categories.map((category) => (
            <Link href={`/categories/${category.name}`}>
              <p onClick={setToFalse}>{category.name}</p>
            </Link>
          ))}
      </div>
      <div className="featured-products">
        {filterProducts.map((product) => (
          <Link href={`/products/${product.permalink}`}>
            <div className="product">
              <ProductImage
                imageUrl={product.assets[0].url}
                imageUrl2={product.assets[1].url}
              />

              <p>{product.name}</p>
              <p>{product.price.formatted_with_symbol}</p>
            </div>
          </Link>
        ))}
      </div>
    </StyledProductMenu>
  );
};

export default ProductMenu;
