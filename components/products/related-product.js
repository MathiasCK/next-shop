import React from "react";
import styled from "styled-components";

const RelatedProduct = ({ relatedProduct }) => {
  return (
    <StyledRelatedProduct>
      <div className="image">
        <img src={relatedProduct.media.source} />
      </div>
      <div className="title">
        <p>{relatedProduct.name}</p>
        <p>{relatedProduct.price.formatted_with_symbol}</p>
      </div>
    </StyledRelatedProduct>
  );
};

const StyledRelatedProduct = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
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

export default RelatedProduct;
