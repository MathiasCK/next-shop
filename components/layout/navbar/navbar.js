import React, { useRef, useState, useEffect } from "react";
import {
  StyledNavbar,
  Title,
  Actions,
  StyledSideBar,
  BackDrop,
  NavLinks,
} from "../../../styles/navbar/navbar-styles";
import { useRouter } from "next/router";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import { AnimatePresence, useAnimation } from "framer-motion";
import { container } from "../../../utils/animation";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  useCart,
  useCategories,
  useProducts,
} from "../../../context/CartContext";
import Cart from "../../cart/cart";

import ProductMenu from "./product-menu";

const Navbar = () => {
  const router = useRouter();
  const categories = useCategories();

  const [sideBar, setSideBar] = useState();
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [initialBackground, setInitialBackground] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  const sideRef = useRef();
  const controls = useAnimation();

  const products = useProducts();
  const filterProducts = products.filter((product) => {
    return product.sku;
  });

  const cart = useCart();
  const totalItems = cart.total_items;

  useEffect(() => {
    if (visibleNavbar) {
      controls.start("show");
    }
    if (!visibleNavbar) {
      controls.start("hidden");
    }
  }, [controls, visibleNavbar]);

  useEffect(() => {
    if (sideBar) disableBodyScroll(sideRef.current);
    else enableBodyScroll(sideRef.current);

    return () => {
      enableBodyScroll(sideRef.current);
    };
  }, [sideBar]);

  const sideBarHandler = () => {
    setSideBar(!sideBar);
    setVisibleNavbar(!visibleNavbar);
    setInitialBackground(!initialBackground);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 735) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const showProducts = () => {
    setProductMenu(!productMenu);
  };

  return (
    <>
      <div>
        <StyledNavbar
          style={
            router.asPath !== "/"
              ? { color: "black", background: "white" }
              : undefined
          }
          className={activeNavbar || initialBackground ? "active" : undefined}
        >
          <NavLinks style={{ display: "flex" }}>
            <Link href="/products">
              <h1 onMouseOver={showProducts} className="sub-header nav-link">
                Products
              </h1>
            </Link>

            <Link href="/about">
              <div>
                <h1 className="sub-header nav-link">About</h1>
              </div>
            </Link>
          </NavLinks>

          <Title>
            <Link href="/">
              <p>Commerce.js</p>
            </Link>
          </Title>
          {/*
      <NavLinks>
        {categories &&
          categories.map((category) => (
            <Link href={`/categories/${category.name}`}>
              <p>{category.name}</p>
            </Link>
          ))}
      </NavLinks>*/}

          <Actions onClick={sideBarHandler}>
            <Link href="/login">
              <div>
                <h1 className="sub-header nav-link">Login</h1>
              </div>
            </Link>
            <div className="relative">
              <AiOutlineShopping
                style={{ fontSize: "2rem", cursor: "pointer" }}
              />

              <p>{totalItems}</p>
            </div>
          </Actions>
        </StyledNavbar>

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
        <StyledSideBar
          ref={sideRef}
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
            <Cart sideBarHandler={sideBarHandler} />
          </nav>
        </StyledSideBar>
      </div>
      {productMenu && (
        <ProductMenu
          showProducts={showProducts}
          filterProducts={filterProducts}
          categories={categories}
        />
      )}
    </>
  );
};

export default Navbar;
