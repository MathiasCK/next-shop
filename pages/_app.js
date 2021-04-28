import Cursor from "../components/Cursor";
import Layout from "../components/layout/layout";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout>
        <Cursor />
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};

export default MyApp;
