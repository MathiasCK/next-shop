import { createContext, useContext, useState, useEffect } from "react";
import commerce from "../utils/commerce";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [categories, setCategories] = useState();

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
    //setCart(await commerce.cart.retrieve())
  };

  useEffect(() => {
    fetchCart();
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data: categories } = await commerce.categories.list();
    setCategories(categories);
  };

  const addToCartHandler = async (productId, quantity, size) => {
    const { cart } = await commerce.cart.add(
      productId,
      quantity,
      selected_options({
        size,
      })
    );
    setCart(cart);
  };

  const updateCartHandler = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const removeCartHandler = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const emptyCartHandler = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      await emptyCartHandler();
      await refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        categories,
        order,
        errorMessage,
        handleCaptureCheckout,
        fetchCart,
        addToCartHandler,
        updateCartHandler,
        removeCartHandler,
        emptyCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export const useCart = () => useCartContext().cart;

export const useCategories = () => useCartContext().categories;

export const useOrder = () => useCartContext().order;

export const useErrorMessage = () => useCartContext().errorMessage;

export const useHandleCaptureCheckout = () =>
  useCartContext().handleCaptureCheckout;

export const useFetchCart = () => useCartContext().fetchCart;

export const useAddToCartHandler = () => useCartContext().addToCartHandler;

export const useUpdateCartHandler = () => useCartContext().updateCartHandler;

export const useRemoveCartHandler = () => useCartContext().removeCartHandler;

export const useEmptyCartHandler = () => useCartContext().emptyCartHandler;
