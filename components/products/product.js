import { motion } from "framer-motion";
import styled from "styled-components";
import { productAnim } from "../../utils/animation";
import Spinner from "../../utils/Spinner";

const Product = ({ name, price, assets, description }) => {
  const images = assets;

  return (
    <StyledProduct variants={productAnim}>
      {images[1].url && (
        <Image imageUrl={images[0].url} imageUrl2={images[1].url} />
      )}
      <Description>
        <p className="sub-header product">{name}</p>
        <p className="sub-header price">{price.formatted_with_symbol}</p>
      </Description>
    </StyledProduct>
  );
};

const StyledProduct = styled(motion.div)`
  @media (min-width: 450px) {
    margin: 1rem;
  }
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const Image = styled.div`
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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
`;

export default Product;
