import { AnimatePresence } from "framer-motion";
import React from "react";

import { BackDrop, StyledSideBar } from "../../../styles/navbar/navbar-styles";
import { useIsMobile } from "../../../utils/is-mobile";
import Cart from "../../cart/cart";

const Sidebar = ({ sideBar, sideBarHandler }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <AnimatePresence>
        {sideBar && (
          <BackDrop
            onClick={sideBarHandler}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            }}
            exit={{
              opacity: 0,
            }}
          />
        )}
      </AnimatePresence>
      <StyledSideBar>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
          <Cart sideBarHandler={sideBarHandler} />
        </nav>
      </StyledSideBar>
    </>
  );
};

export default Sidebar;
