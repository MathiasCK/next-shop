import React from "react";
import styled from "styled-components";
import {
  useRemoveCartHandler,
  useUpdateCartHandler,
} from "../../context/CartContext";
import Button from "../button/button";

const CartItem = ({ cartItem }) => {
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
          <p>{cartItem.name}</p>
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
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
`;

const Information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  .info {
    font-size: 2rem;
    font-weight: lighter;
  }
  .price {
    display: flex;
    .qty {
      margin-left: 0.25rem;
    }
  }
  button {
    margin-right: 1rem;
    padding: 0.25rem 0.5rem !important;
  }

  .buttons {
    display: flex;
  }
`;

const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CartItem;
