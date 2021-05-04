import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <div>
      <h1>Order summary</h1>
      <div>
        {checkoutToken.live.line_items.map((product) => (
          <div key={product.name}>
            <div>
              <h2>{product.name}</h2>
              <p>{`Quantity : ${product.quantity}`}</p>
            </div>
            <div>{product.line_total.formatted_with_symbol}</div>
          </div>
        ))}
        <div>{`Total : ${checkoutToken.live.subtotal.formatted_with_symbol}`}</div>
      </div>
    </div>
  );
};

export default Review;
