import React from "react";

import { StyledRelatedProduct } from "../../styles/products/product-styles";

const RelatedProduct = ({ relatedProduct }) => {
  console.log("REL", relatedProduct);
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

export default RelatedProduct;
