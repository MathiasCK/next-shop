import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import {
  StyledNavbar,
  Title,
  Actions,
  StyledSideBar,
  BackDrop,
} from "./navbar-styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, useAnimation } from "framer-motion";
import { container, lineAnim, navLinkFade } from "../../../utils/animation";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Navbar = () => {
  const router = useRouter();
  const [sideBar, setSideBar] = useState();
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [activeNavar, setActiveNavbar] = useState(false);

  const sideRef = useRef();
  const controls = useAnimation();

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
      <StyledNavbar className={activeNavar ? "active" : undefined}>
        <Title>
          <Link href="/">
            <img
              className="logo"
              src={"/commerce.png"}
              alt="Commerce.js"
              height="30px"
            />
          </Link>
          <p>Commerce.js</p>
        </Title>
        {router.asPath !== "/cart" && (
          <Actions>
            <FontAwesomeIcon
              className="logo secondary"
              icon={faShoppingBag}
              size="lg"
              color="black"
            />
            {/*<p>Number</p>*/}
            <div onClick={sideBarHandler}>
              {sideBar ? (
                <AiOutlineClose
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                />
              ) : (
                <BiMenuAltRight
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                />
              )}
            </div>
          </Actions>
        )}
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
          <p>Hello</p>
        </nav>
      </StyledSideBar>
    </div>
  );
};

export default Navbar;
