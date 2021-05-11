import React from "react";
import { StyledSideBar } from "../../../styles/navbar/navbar-styles";
import Cart from "../../cart/cart";

const Sidebar = ({ sideBar, sideBarHandler }) => {
  return (
    <StyledSideBar>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <Cart sideBarHandler={sideBarHandler} />
      </nav>
    </StyledSideBar>
  );
};

export default Sidebar;
