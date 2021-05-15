import Link from "next/link";
import React from "react";
import { StyledNavLinks } from "../../../styles/navbar/navbar-styles";

const NavLinks = ({ isMobile, setToFalse, setToTrue }) => {
  return (
    <StyledNavLinks>
      {isMobile ? null : (
        <div style={{ display: "flex" }}>
          <Link href="/products">
            <h1
              onClick={setToFalse}
              onMouseOver={setToTrue}
              className="sub-header nav-link"
            >
              Products
            </h1>
          </Link>
          <Link href="/about">
            <div onClick={setToFalse}>
              <h1 className="sub-header nav-link">About</h1>
            </div>
          </Link>
        </div>
      )}
    </StyledNavLinks>
  );
};

export default NavLinks;
