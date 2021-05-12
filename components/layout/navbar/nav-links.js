import Link from "next/link";
import React from "react";
import { StyledNavLinks } from "../../../styles/navbar/navbar-styles";

const NavLinks = ({ isMobile, productMenuHandler, setToFalse, setToTrue }) => {
  return (
    <StyledNavLinks>
      {isMobile ? (
        <h1 onClick={productMenuHandler} className="sub-header nav-link">
          Products
        </h1>
      ) : (
        <Link href="/products">
          <h1
            onClick={setToFalse}
            onMouseOver={setToTrue}
            className="sub-header nav-link"
          >
            Products
          </h1>
        </Link>
      )}

      <Link href="/about">
        <div onClick={setToFalse}>
          <h1 className="sub-header nav-link">About</h1>
        </div>
      </Link>
    </StyledNavLinks>
  );
};

export default NavLinks;
