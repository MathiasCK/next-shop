import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  min-height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  &.shadow {
    -moz-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  }

  &.active {
    background: white;
    color: black;

    transition: all 0.3s ease;
  }
`;

export const Title = styled.h6`
  align-items: center;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  p {
    font-family: "Lobster", cursive;
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  .relative {
    position: relative;

    p {
      user-select: none;
      font-size: smaller;
      position: absolute;
      top: -50%;
      right: -10%;
      transform: translate(10%, 50%);
    }
  }
`;

export const StyledSideBar = styled(motion.div)`
  nav {
    background: white;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    right: -100%;
    transition: all 0.5s ease;
    will-change: opacity, right;
    opacity: 0;
    @media screen and (min-width: 768px) {
      width: 40vw;
    }
    &.active {
      right: 0;
      opacity: 1;
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
  backdrop-filter: saturate(180%) blur(1px);
`;

export const NavLinks = styled.div`
  display: flex;
  h1 {
    margin: 0 0.5rem;
  }
`;

export const StyledProductMenu = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40vh;
  transition: 0.3s all ease;
  text-transform: uppercase;
  background: white;
  width: 100%;

  padding: 0 1rem;
  & .nav-links {
    width: 20%;
    display: flex;
    flex-direction: column;
    p {
      cursor: pointer;
      text-transform: uppercase;
    }
  }
  & .featured-products {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    & .product {
      min-width: 20%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      & .description {
        height: 20%;
      }
    }
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  will-change: background-image;
  ${({ imageUrl2 }) =>
    imageUrl2
      ? `&:hover {
				cursor: pointer;
		background-image: url('${imageUrl2}');
	}`
      : ""};
`;
