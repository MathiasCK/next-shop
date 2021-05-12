import { useAnimation } from "framer-motion";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import commerce from "../utils/commerce";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [categories, setCategories] = useState([]);

  // Sidebar trigger
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
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export const useCart = () => useAppContext().cart;

export const useSideBarHandler = () => useAppContext().sideBarHandler;

export const useActiveNavbarHandler = () => useAppContext().activeNavbarHandler;

export const useActiveNavbar = () => useAppContext().activeNavbar;

export const useInitialBackground = () => useAppContext().initialBackground;

export const useProductMenuHandler = () => useAppContext().productMenuHandler;

export const useSetToFalse = () => useAppContext().setToFalse;

export const useSetToTrue = () => useAppContext().setToTrue;

export const useProductMenu = () => useAppContext().productMenu;

export const useSideRef = () => useAppContext().sideRef;

export const useSidebar = () => useAppContext().sideBar;

export const useProducts = () => useAppContext().products;

export const useCategories = () => useAppContext().categories;

export const useOrder = () => useAppContext().order;

export const useErrorMessage = () => useAppContext().errorMessage;

export const useHandleCaptureCheckout = () =>
  useAppContext().handleCaptureCheckout;

export const useFetchCart = () => useAppContext().fetchCart;

export const useAddToCartHandler = () => useAppContext().addToCartHandler;

export const useUpdateCartHandler = () => useAppContext().updateCartHandler;

export const useRemoveCartHandler = () => useAppContext().removeCartHandler;

export const useEmptyCartHandler = () => useAppContext().emptyCartHandler;
