import React from "react";

import {
  useRemoveCartHandler,
  useUpdateCartHandler,
} from "../../context/CartContext";
import {
  StyledCartItem,
  Information,
  Image,
} from "../../styles/cart/cart-styles";
import Button from "../button/button";

const CartItem = ({ cartItem }) => {
  const size = cartItem.selected_options[0].option_name;
  const removeItem = useRemoveCartHandler();
  const updateItemQty = useUpdateCartHandler();
  return (
    <StyledCartItem>
      <Image>
        <img src={cartItem.media.source} />
      </Image>
      <Information>
        <div
          style={{
            minWidth: "100%",

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>
            {cartItem.name} ({size})
          </p>
          <p>{cartItem.price.formatted_with_symbol} x</p>
        </div>
        <div style={{ display: "flex", fontWeight: "lighter" }}>
          <p>lorem</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <button
              onClick={() => updateItemQty(cartItem.id, cartItem.quantity - 1)}
            >
              -
            </button>
            <p className="qty">{cartItem.quantity}</p>
            <button
              onClick={() => updateItemQty(cartItem.id, cartItem.quantity + 1)}
            >
              +
            </button>
          </div>
          <div>
            <button className="remove" onClick={() => removeItem(cartItem.id)}>
              X
            </button>
          </div>
        </div>
        {/*
        <div className="info">
          <p>
            {cartItem.name} ({size})
          </p>
        </div>

        <div className="price">
          <p>{cartItem.price.formatted_with_symbol} x</p>
        </div>
        <div className="buttons">
          <Button
            onClick={() => updateItemQty(cartItem.id, cartItem.quantity - 1)}
          >
            -
          </Button>
          <p className="qty">{cartItem.quantity}</p>
          <Button
            onClick={() => updateItemQty(cartItem.id, cartItem.quantity + 1)}
          >
            +
          </Button>
          <button className="remove" onClick={() => removeItem(cartItem.id)}>
        X
      </button>
        </div>*/}
      </Information>
    </StyledCartItem>
  );
};

export default CartItem;
