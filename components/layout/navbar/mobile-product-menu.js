import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { StyledMobileProductMenu } from "../../../styles/navbar/navbar-styles";

const MobileProductMenu = ({
  filterProducts,
  mobileMenu,
  mobileMenuHandler,
  categories,
}) => {
  return (
    <StyledMobileProductMenu className={mobileMenu ? "active" : null}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="link">
          <Link href="/">
            <p onClick={mobileMenuHandler}>Home</p>
          </Link>
        </div>
        <div className="link">
          <Link href="/products">
            <p onClick={mobileMenuHandler}>View All Products</p>
          </Link>
        </div>
        {categories &&
          categories.map((category) => (
            <Link key={category.name} href={`/categories/${category.name}`}>
              <div className="link">
                <p onClick={mobileMenuHandler}>{category.name}</p>
              </div>
            </Link>
          ))}
      </div>
      <div>
        {filterProducts.map((product) => (
          <Link key={product.permalink} href={`/products/${product.permalink}`}>
            <div onClick={mobileMenuHandler}>
              <img
                style={{ height: "25px", width: "25px" }}
                src={product.assets[0].url}
              />

              <p>{product.name}</p>
              <p>{product.price.formatted_with_symbol}</p>
            </div>
          </Link>
        ))}
      </div>
    </StyledMobileProductMenu>
  );
};

export default MobileProductMenu;
