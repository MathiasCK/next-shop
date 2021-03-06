import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../utils/media-query';

export const StyledNavbar = styled.nav`
  ${media.large`
  margin-bottom: 0;
  `}
  position: fixed;
  min-height: 70px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center !important;
  z-index: 999;
  margin-bottom: 1rem;
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
    font-family: 'Lobster', cursive;
    margin: 0 1rem;
    font-size: 2vh;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: 70px;
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
  //backdrop-filter: saturate(180%) blur(1px);
`;

export const StyledNavLinks = styled.div`
  display: flex;
  h1 {
    margin: 0 0.5rem;
  }
`;

export const StyledProductMenu = styled.div`
  ${media.large`
  flex-direction: row;
  min-height: 40vh;
`}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 30vh;
  transition: 0.3s all ease;
  text-transform: uppercase;
  background: white;
  width: 100%;
  z-index: 1000;
  padding: 0 1rem;
  & .nav-links {
    ${media.large`
  
  width: 20%;
`}
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      : ''};
`;

export const StyledMobileProductMenu = styled(motion.div)`
  background: white;
  z-index: 1000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  position: fixed;
  text-transform: uppercase;
  overflow-y: scroll;
  top: 70px;
  left: -100%;
  transition: all 0.5s ease;
  will-change: opacity, right;
  opacity: 0;

  &.active {
    left: 0;
    opacity: 0.95;
  }
  .link {
    padding: 0.5rem 1rem;
    p {
      padding: 0 0.5rem;
    }
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const MobileProducts = styled(MobileLinks)`
  .product {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 20vh;
    margin: 1.5rem 0;

    .image {
      width: 50%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .information {
      width: 50%;
      font-weight: lighter;
    }
  }
`;
