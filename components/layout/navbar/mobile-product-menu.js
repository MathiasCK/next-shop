import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { StyledMobileProductMenu } from "../../../styles/navbar/navbar-styles";

const MobileProductMenu = ({
  mobileMenu,
  mobileMenuHandler,
  categories,
  setToFalse,
}) => {
  return (
    <>
      <StyledMobileProductMenu className={mobileMenu ? "active" : null}>
        <div className="link">
          <p>Home</p>
          <div className="border" />
        </div>
        <div className="link">
          <p>Home</p>
          <div className="border" />
        </div>
        {categories &&
          categories.map((category) => (
            <Link key={category.name} href={`/categories/${category.name}`}>
              <div className="link">
                <p onClick={setToFalse}>{category.name}</p>
                <div className="border" />
              </div>
            </Link>
          ))}
      </StyledMobileProductMenu>
    </>
  );
};

export default MobileProductMenu;
