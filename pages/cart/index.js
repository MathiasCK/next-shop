import React from "react";
import CartItem from "../../components/cart/cart-item";
import { useCart, useEmptyCartHandler } from "../../context/CartContext";
import Spinner from "../../utils/Spinner";

import RouteTransition from "../../utils/route-transition";
import Button from "../../components/button/button";
import Link from "next/link";
import { StyledCart, Actions } from "../../styles/cart/cart-styles";

const Cart = () => {
  const emptyCart = useEmptyCartHandler();
  const cart = useCart();

  if (!cart.line_items) return <Spinner />;

  console.log(cart.line_items);

  return (
    <RouteTransition>
      <StyledCart>
        {cart.line_items.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem cartItem={cartItem} />
          </div>
        ))}
        <Actions>
          <p>Your total is: {cart.subtotal.formatted_with_symbol}</p>
          <Button onClick={emptyCart}>Empty Cart</Button>
          <Link href="/checkout">
            <Button>Go To Checkout</Button>
          </Link>
        </Actions>
      </StyledCart>
    </RouteTransition>
  );
};

export default Cart;
