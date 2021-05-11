import React, { useRef, useState, useEffect } from "react";
import {
  StyledNavbar,
  Title,
  Actions,
  BackDrop,
  NavLinks,
  Content,
} from "../../../styles/navbar/navbar-styles";
import { useRouter } from "next/router";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import { AnimatePresence, useAnimation } from "framer-motion";
import { container } from "../../../utils/animation";

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
} from "../../../context/CartContext";

import ProductMenu from "./product-menu";
import { useIsMobile } from "../../../utils/is-mobile";
import Sidebar from "./sidebar";

const Navbar = () => {
  const router = useRouter();
  const categories = useCategories();

  const controls = useAnimation();
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

  return (
    <div>
      <StyledNavbar
        onMouseLeave={isMobile ? null : setToFalse}
        onMouseOver={activeNavbarHandler}
        style={
          router.asPath !== "/"
            ? { color: "black", background: "white" }
            : undefined
        }
        className={
          activeNavbar || initialBackground ? "active shadow" : undefined
        }
      >
        {/*
         */}
        <Content>
          <NavLinks>
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
          </NavLinks>
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
            setToFalse={setToFalse}
            filterProducts={filterProducts}
            categories={categories}
          />
        )}
      </StyledNavbar>

      {/* Sidebar */}
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
      <Sidebar
        ref={sideRef}
        initial="hidden"
        animate={controls}
        variants={container}
        sideBar={sideBar}
        sideBarHandler={sideBarHandler}
      />
    </div>
  );
};

export default Navbar;
