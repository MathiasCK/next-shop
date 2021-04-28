import React from "react";
import { useCart, useEmptyCartHandler } from "../../context/CartContext";

const Cart = () => {
  const emptyCart = useEmptyCartHandler();
  const cart = useCart();

  console.log(cart);

  const EmptyCart = () => <div>You have no items in your shopping cart</div>;

  return <div>this is cart</div>;
};

export default Cart;
