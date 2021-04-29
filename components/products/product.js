import styled from "styled-components";

const Product = ({ name, price, assets, description }) => {
  const image = assets[0].url;

  return (
    <StyledProduct>
      <Image>
        <img src={image} />
      </Image>
      <Description>
        <h4>{name}</h4>
        <p>{price.formatted_with_symbol}</p>
      </Description>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  margin: 1rem;
  height: auto;
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const Image = styled.div`
  width: 100%;
  min-height: 70%;
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
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30%;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 1.5em;
    font-weight: lighter;
    padding: 1rem 0;
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
  }
`;

export default Product;
