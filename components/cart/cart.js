import React from "react";
import CartItem from "./cart-item";
import { useCart } from "../../context/AppContext";
import Spinner from "../../utils/Spinner";

import Button from "../button/button";
import Link from "next/link";
import { StyledCart, Actions } from "../../styles/cart/cart-styles";

const Cart = ({ sideBarHandler }) => {
  const cart = useCart();

  if (!cart.line_items) return <Spinner />;

  const cartEmpty = cart.line_items.length === 0;

  if (cartEmpty) {
    return (
      <StyledCart>
        <div className="title">
          <h1 className="header">Your shopping cart</h1>
          <button onClick={sideBarHandler}>x</button>
        </div>

        <Actions>
          <h2>Nothing to see here your cart is empty!</h2>
        </Actions>
      </StyledCart>
    );
  }

  return (
    <StyledCart>
      <div className="title">
        <h1 className="header">Your shopping cart</h1>
        <button onClick={sideBarHandler}>x</button>
      </div>
      {cart.line_items.map((cartItem) => (
        <div key={cartItem.id}>
          <CartItem cartItem={cartItem} />
        </div>
      ))}
      <Actions>
        <div className="price">
          <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className="buttons">
          <Button onClick={sideBarHandler}>Continue Shopping</Button>
          <Link href="/checkout">
            <div>
              <Button onClick={sideBarHandler} className="inverted">
                Go To Checkout
              </Button>
            </div>
          </Link>
        </div>
      </Actions>
    </StyledCart>
  );
};

export default Cart;
