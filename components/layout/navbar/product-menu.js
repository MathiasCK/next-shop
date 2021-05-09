import React from "react";
import Link from "next/link";
import {
  StyledProductMenu,
  ProductImage,
} from "../../../styles/navbar/navbar-styles";
import { useIsMobile } from "../../../utils/is-mobile";

const ProductMenu = ({ filterProducts, setToFalse, categories }) => {
  const isMobile = useIsMobile();
  return (
    <StyledProductMenu>
      <div className="nav-links">
        {isMobile && (
          <Link href="/products">
            <p style={{ fontWeight: "bold" }} onClick={setToFalse}>
              View All
            </p>
          </Link>
        )}
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
