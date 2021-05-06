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
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose, AiOutlineShopping } from "react-icons/ai";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { container, navLinkFade, lineAnim } from "../../../utils/animation";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useCart, useCategories } from "../../../context/CartContext";
import Cart from "../../cart/cart";

const Navbar = () => {
  const router = useRouter();
  const categories = useCategories();

  const [sideBar, setSideBar] = useState();
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [initialBackground, setInitialBackground] = useState(false);

  const sideRef = useRef();
  const controls = useAnimation();

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

  return (
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
          <h1 className="sub-heading">Products</h1>
          <h1 className="sub-heading">About</h1>
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
  );
};

export default Navbar;
