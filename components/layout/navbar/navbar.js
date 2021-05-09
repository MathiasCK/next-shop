import React, { useRef, useState, useEffect } from "react";
import {
  StyledNavbar,
  Title,
  Actions,
  StyledSideBar,
  BackDrop,
  NavLinks,
  Content,
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
import { useIsMobile } from "../../../utils/is-mobile";

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

  const setToTrue = () => {
    setProductMenu(true);
  };

  const setToFalse = () => {
    setProductMenu(false);
  };

  const productMenuHandler = () => {
    setProductMenu(!productMenu);
  };
  const isMobile = useIsMobile();
  console.log("ISMOBILE?" + isMobile);

  return (
    <>
      <StyledNavbar
        onMouseLeave={isMobile ? null : setToFalse}
        onMouseOver={() => setActiveNavbar(true)}
        style={
          router.asPath !== "/"
            ? { color: "black", background: "white" }
            : undefined
        }
        className={activeNavbar || initialBackground ? "active" : undefined}
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
    </>
  );
};

export default Navbar;
