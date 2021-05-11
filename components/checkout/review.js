import React from "react";

const Review = ({ checkoutToken, totalPrice }) => {
  return (
    <div>
      <center>
        <h1 className="header">Order summary</h1>
      </center>
      <div>
        {checkoutToken.live.line_items.map((product) => (
          <div key={product.name}>
            <div>
              <h2 className="sub-header">{product.name}</h2>
              <p>{`Quantity : ${product.quantity}`}</p>
            </div>
            <div>{product.line_total.formatted_with_symbol}</div>
            <img
              style={{ height: "100px", width: "100px" }}
              src={product.media.source}
            />
          </div>
        ))}
        <div>{`Total : ${totalPrice} NOK`}</div>
      </div>
    </div>
  );
};

export default Review;
