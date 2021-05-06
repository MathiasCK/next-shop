import React from "react";
import CartItem from "./cart-item";
import { useCart, useEmptyCartHandler } from "../../context/CartContext";
import Spinner from "../../utils/Spinner";

import RouteTransition from "../../utils/route-transition";
import Button from "../button/button";
import Link from "next/link";
import { StyledCart, Actions } from "../../styles/cart/cart-styles";

const Cart = ({ sideBarHandler }) => {
  const emptyCart = useEmptyCartHandler();
  const cart = useCart();

  if (!cart.line_items) return <Spinner />;

  if (cart.line_items.length === 0) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <h2 className="sub-header"> Nothing to see hereYour cart is empty</h2>
      </div>
    );
  }

  console.log(cart.line_items);

  return (
    <StyledCart>
      <div className="title">
        <h1 className="sub-header">Your shopping cart</h1>
        <button onClick={sideBarHandler}>x</button>
      </div>
      {cart.line_items.map((cartItem) => (
        <div key={cartItem.id}>
          <CartItem cartItem={cartItem} />
        </div>
      ))}
      <Actions>
        <div className="price">
          <p>Your total is: {cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className="buttons">
          <Button>Continue Shopping</Button>
          <Link href="/checkout">
            <Button className="inverted">Go To Checkout</Button>
          </Link>
        </div>
      </Actions>
    </StyledCart>
  );
};

export default Cart;
