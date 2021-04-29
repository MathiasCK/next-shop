import React from "react";
import CartItem from "../../components/cart/cart-item";
import { useCart, useEmptyCartHandler } from "../../context/CartContext";
import Spinner from "../../utils/Spinner";
import styled from "styled-components";
import RouteTransition from "../../utils/route-transition";
import Button from "../../components/button/button";
import Link from "next/link";

const Cart = () => {
  const emptyCart = useEmptyCartHandler();
  const cart = useCart();

  if (!cart.line_items) return <Spinner />;

  return (
    <RouteTransition>
      <StyledCart>
        {cart.line_items.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem cartItem={cartItem} />
          </div>
        ))}
      </StyledCart>
      <Button onClick={emptyCart}>Empty Cart</Button>
      <Link href="/checkout">
        <Button>Go To Checkout</Button>
      </Link>
    </RouteTransition>
  );
};

const StyledCart = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

export default Cart;
