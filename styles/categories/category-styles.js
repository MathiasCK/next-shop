import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../utils/media-query';

// [slug].js
export const CategoryName = styled(motion.h1)`
  text-transform: uppercase;
`;

// category-list.js
export const StyledCategories = styled(motion.div)`
  width: 100% !important;
  display: flex;
  flex-wrap: wrap;
`;

// category.js
export const StyledCategory = styled(motion.div)`
  width: 100%;
  ${media.medium`
  width: 50%;
  `}
  ${media.large`
  width: 50%;
  `}

  .content {
    position: relative !important;
    height: 500px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center;
      background-size: cover;
      transition: 0.3s ease-in-out;
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
  &:hover {
    img {
      opacity: 0.7;
      cursor: pointer;
    }
    p {
      background: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
  }
`;
