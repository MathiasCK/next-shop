import React from "react";
import { StyledReview } from "../../styles/checkout/checkout-styles";
const Review = ({ checkoutToken, totalPrice }) => {
  return (
    <div>
      <center>
        <h1 className="header">Order summary</h1>
      </center>
      <StyledReview>
        {checkoutToken.live.line_items.map((product) => (
          <div className="product" key={product.name}>
            <center>
              <h2 className="sub-header">{product.name}</h2>
            </center>
            <div className="information">
              <p>{`Quantity : ${product.quantity}`}</p>
              <p>{product.line_total.formatted_with_symbol}</p>
            </div>

            <img src={product.media.source} />
          </div>
        ))}
      </StyledReview>
      <div style={{ fontWeight: "300" }}>{`Total : ${totalPrice} NOK`}</div>
    </div>
  );
};

export default Review;
