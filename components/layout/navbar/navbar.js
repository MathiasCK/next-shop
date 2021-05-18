import React, { useState } from "react";
import {
  StyledNavbar,
  Title,
  Actions,
  Content,
} from "../../../styles/navbar/navbar-styles";
import { useRouter } from "next/router";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";

import { container } from "../../../utils/animation";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  useActiveNavbar,
  useActiveNavbarHandler,
  useCart,
  useCategories,
  useProducts,
  useInitialBackground,
  useProductMenuHandler,
  useSetToFalse,
  useSideBarHandler,
  useProductMenu,
  useSidebar,
  useSideRef,
  useSetToTrue,
} from "../../../context/AppContext";

import ProductMenu from "./product-menu";
import NavLinks from "./nav-links";
import { useIsMobile } from "../../../utils/is-mobile";
import Sidebar from "./sidebar";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import MobileProductMenu from "./mobile-product-menu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };
  // Hooks
  const router = useRouter();
  const categories = useCategories();
  const products = useProducts();
  const cart = useCart();
  const isMobile = useIsMobile();
  const activeNavbarHandler = useActiveNavbarHandler();
  const activeNavbar = useActiveNavbar();
  const initialBackground = useInitialBackground();
  const productMenuHandler = useProductMenuHandler();
  const setToFalse = useSetToFalse();
  const sideBarHandler = useSideBarHandler();
  const productMenu = useProductMenu();
  const sideBar = useSidebar();
  const sideRef = useSideRef();
  const setToTrue = useSetToTrue();

  const filterProducts = products.filter((product) => {
    return product.sku;
  });
  const totalItems = cart.total_items;

  if (isMobile && productMenu) {
    disableBodyScroll(sideRef.current);
  } else {
    enableBodyScroll(sideRef.current);
  }

  return (
    <StyledNavbar
      onMouseLeave={isMobile ? null : setToFalse}
      onMouseOver={activeNavbarHandler}
      style={
        router.asPath !== "/"
          ? {
              color: "black",
              background: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
            }
          : undefined
      }
      className={
        activeNavbar || initialBackground ? "active shadow" : undefined
      }
      onClick={isMobile ? activeNavbarHandler : null}
    >
      <Content>
        {isMobile ? (
          <BiMenuAltLeft
            onClick={mobileMenuHandler}
            style={{ fontSize: "2rem" }}
          />
        ) : null}
        <NavLinks
          setToFalse={setToFalse}
          setToTrue={setToTrue}
          productMenuHandler={productMenuHandler}
          isMobile={isMobile}
        />

        {isMobile ? null : (
          <Title>
            <Link href="/">
              <p onClick={setToFalse}>Commerce.js</p>
            </Link>
          </Title>
        )}

        <Actions onClick={setToFalse}>
          <Link href="/login">
            <div>
              <h1 className="sub-header nav-link">Login</h1>
            </div>
          </Link>

          <div className="relative" onClick={sideBarHandler}>
            <AiOutlineShopping
              style={{ fontSize: "2rem", cursor: "pointer" }}
            />
            <p>{totalItems}</p>
          </div>
        </Actions>
      </Content>
      {productMenu && (
        <ProductMenu
          mobileMenu={mobileMenu}
          setToFalse={setToFalse}
          filterProducts={filterProducts}
          categories={categories}
        />
      )}

      <MobileProductMenu
        initial="hidden"
        variants={container}
        mobileMenu={mobileMenu}
        mobileMenuHandler={mobileMenuHandler}
        categories={categories}
        filterProducts={filterProducts}
      />

      <div ref={sideRef}>
        <Sidebar
          initial="hidden"
          variants={container}
          sideBar={sideBar}
          sideBarHandler={sideBarHandler}
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
