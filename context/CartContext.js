import { useAnimation } from "framer-motion";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import commerce from "../utils/commerce";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [categories, setCategories] = useState([]);

  //

  const controls = useAnimation();
  const sideRef = useRef();
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [sideBar, setSideBar] = useState();
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [initialBackground, setInitialBackground] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  const sideBarHandler = () => {
    setSideBar(!sideBar);
    setVisibleNavbar(!visibleNavbar);
    setInitialBackground(!initialBackground);
  };

  const setToTrue = () => {
    setProductMenu(true);
  };

  const setToFalse = () => {
    setProductMenu(false);
  };

  const productMenuHandler = () => {
    setProductMenu(!productMenu);
  };

  const activeNavbarHandler = () => {
    setActiveNavbar(true);
  };

  useEffect(() => {
    if (visibleNavbar) {
      controls.start("show");
    }
    if (!visibleNavbar) {
      controls.start("hidden");
    }
  }, [controls, visibleNavbar]);

  useEffect(() => {
    if (sideBar) disableBodyScroll(sideRef.current);
    else enableBodyScroll(sideRef.current);

    return () => {
      enableBodyScroll(sideRef.current);
    };
  }, [sideBar]);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 735) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  //

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
    //setCart(await commerce.cart.retrieve())
  };
  const fetchCategories = async () => {
    const { data: categories } = await commerce.categories.list();
    setCategories(categories);
  };

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categories } = await commerce.categories.list();

    const productsPerCategory = categories.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);
    setProducts(products);
  };

  useEffect(() => {
    fetchCart();
    fetchCategories();
    fetchProducts();
  }, []);

  const addToCartHandler = async (productId, quantity, variantData) => {
    const { cart } = await commerce.cart.add(productId, quantity, variantData);
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
      console.log(error.message, "HANDLE");
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        categories,
        order,
        errorMessage,
        sideBarHandler,
        productMenuHandler,
        activeNavbarHandler,
        sideBar,
        productMenu,
        sideRef,
        setToFalse,
        setToTrue,
        activeNavbar,
        initialBackground,
        handleCaptureCheckout,
        fetchCart,
        fetchProducts,
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

export const useSideBarHandler = () => useCartContext().sideBarHandler;

export const useActiveNavbarHandler = () =>
  useCartContext().activeNavbarHandler;

export const useActiveNavbar = () => useCartContext().activeNavbar;

export const useInitialBackground = () => useCartContext().initialBackground;

export const useProductMenuHandler = () => useCartContext().productMenuHandler;

export const useSetToFalse = () => useCartContext().setToFalse;

export const useSetToTrue = () => useCartContext().setToTrue;

export const useProductMenu = () => useCartContext().productMenu;

export const useSideRef = () => useCartContext().sideRef;

export const useSidebar = () => useCartContext().sideBar;

export const useProducts = () => useCartContext().products;

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
