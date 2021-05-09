import { motion } from "framer-motion";
import styled from "styled-components";

// [slug].js
export const CategoryName = styled(motion.h1)`
  text-transform: uppercase;
`;

// category-list.js
export const StyledCategories = styled(motion.ul)`
  padding-inline-start: 0 !important;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

// category.js
export const StyledCategory = styled(motion.div)`
  .content {
    position: relative !important;
    height: 500px;
    width: 50vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      background-position: center;
      background-size: cover;
      //&:hover {
      //  transform: scale(1.1);
      //  transition: transform 6s //cubic-bezier(0.25, 0.45, //0.45, 0.95);
      //}
    }
    p {
      background: rgba(255, 255, 255, 0.5);
      padding: 1rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      transition: all 0.3s ease-in-out;
    }
  }
`;
