import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  z-index: 10;
  background: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  transition: all 0.3s ease;
  &.active {
    background: white;
    backdrop-filter: saturate(180%) blur(5px);
    opacity: 0.9;
    color: black;
  }
`;

export const Title = styled.h6`
  flex-grow: 1;
  align-items: center;
  display: flex;
  text-decoration: none;
  p {
    font-family: "Lobster", cursive;
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  width: 70px;
  .relative {
    position: relative;

    p {
      user-select: none;
      font-size: smaller;
      position: absolute;
      top: -10%;
      right: 30%;
      transform: translate(-30%, 10%);
    }
  }
`;

export const StyledSideBar = styled(motion.div)`
  nav {
    background: white;
    z-index: 998;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 67px;
    right: -100%;
    transition: all 0.5s ease;
    will-change: opacity, right;
    opacity: 0;
    @media screen and (min-width: 768px) {
      width: 40vw;
    }

    .border {
      background: black;
      height: 2px;
      width: 100%;
      margin: 1rem 0;
    }

    &.active {
      right: 0;
      opacity: 1;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      width: 100%;
      li {
        margin: 2rem;
        a {
          text-transform: uppercase;
          text-decoration: none;
          color: black;
          font-size: 2rem;

          @media screen and (min-width: 768px) {
            font-size: 3rem;
          }
        }
      }
    }
  }
`;

export const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;
