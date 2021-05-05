import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../utils/media-query";

// product-list.js
export const StyledProdutList = styled.div`
  padding-inline-start: 0 !important;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

// [permalink.js]
export const StyledProductPage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  justify-items: center;
  min-height: 90vh;
  padding-top: 10px;
`;

export const Description = styled.div`
  ${media.large`
  height: calc(70vh);
  `}
  position: sticky;
  top: 5rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .description {
    ${media.medium`
    font-size: 2vh;
  `}
    ${media.large`
  font-size: 3vh;
  `}
    width: 50%;
    font-size: 3vh;
    margin-bottom: 2rem;
    font-weight: lighter !important;
    line-height: em;
  }
  form {
    width: 50%;
  }
  .price {
    font-size: 2vh;
  }
  .size {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid black;
    select {
      outline: none;
      border: none;
    }
  }
  button {
    width: 10%;
    margin-top: 2rem;
    padding: 1rem !important;
  }
`;

export const ImageContainer = styled.div`
  flex: 50%;
  margin: auto 0;
  .images {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 10%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Title = styled.h1`
  ${media.medium`
    font-size: 4vh;
  `}
  ${media.large`
  font-size: 5vh;
  `}
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 3vh;
`;

export const RelatedProducts = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  min-height: 30vh;
`;

// product.js
export const StyledProduct = styled(motion.div)`
  @media (min-width: 450px) {
    margin: 1rem;
  }
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  height: 70vh;
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
  /*
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
  &::hover {
    img {
      opacity: 0.7;
    }
  }*/
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
`;

// related-product.js
export const StyledRelatedProduct = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  min-height: 100%;
  .image {
    width: 100%;
    height: 80%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
