import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Link from "next/link";
import React, { useRef } from "react";
import {
  StyledMobileProductMenu,
  MobileLinks,
  MobileProducts,
} from "../../../styles/navbar/navbar-styles";

const MobileProductMenu = ({
  filterProducts,
  mobileMenu,
  mobileMenuHandler,
  categories,
}) => {
  const menuRef = useRef();
  if (mobileMenu) {
    disableBodyScroll(menuRef.current);
  } else {
    enableBodyScroll(menuRef.current);
  }
  return (
    <div ref={menuRef}>
      <StyledMobileProductMenu className={mobileMenu ? "active" : null}>
        <MobileLinks>
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
        </MobileLinks>
        <MobileProducts>
          {filterProducts.map((product) => (
            <Link
              key={product.permalink}
              href={`/products/${product.permalink}`}
            >
              <div className="product" onClick={mobileMenuHandler}>
                <div className="image">
                  <img src={product.assets[0].url} />
                </div>

                <div className="information">
                  <p>{product.name}</p>
                  <p>{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            </Link>
          ))}
        </MobileProducts>
      </StyledMobileProductMenu>
    </div>
  );
};

export default MobileProductMenu;
