import React from "react";
import styled from "styled-components";
import {
  useRemoveCartHandler,
  useUpdateCartHandler,
} from "../../context/CartContext";

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
        <div>
          <button
            onClick={() => updateItemQty(cartItem.id, cartItem.quantity - 1)}
          >
            -
          </button>
          <button
            onClick={() => updateItemQty(cartItem.id, cartItem.quantity + 1)}
          >
            +
          </button>
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
    background: transparent;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.3s ease;
    color: black;
    &:hover {
      color: white;
      background: black;
    }
  }
`;

const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CartItem;
