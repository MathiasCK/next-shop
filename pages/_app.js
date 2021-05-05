import Cursor from "../utils/Cursor";
import Layout from "../components/layout/layout";
import { CartProvider } from "../context/CartContext";
import "../styles/css/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout />
      <Cursor />
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
