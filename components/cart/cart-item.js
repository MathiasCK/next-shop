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
        <img
          src={cartItem.media.source}
          style={{ height: "200px", width: "200px" }}
        />
      </Image>
      <Information>
        <div className="info">
          <p>
            {cartItem.name} ({size})
          </p>
        </div>

        <div className="price">
          <p>{cartItem.price.formatted_with_symbol} x</p>
          <p className="qty">{cartItem.quantity}</p>
        </div>
        <div className="buttons">
          <Button
            onClick={() => updateItemQty(cartItem.id, cartItem.quantity - 1)}
          >
            -
          </Button>
          <Button
            onClick={() => updateItemQty(cartItem.id, cartItem.quantity + 1)}
          >
            +
          </Button>
        </div>
      </Information>
      <button className="remove" onClick={() => removeItem(cartItem.id)}>
        X
      </button>
    </StyledCartItem>
  );
};

export default CartItem;
