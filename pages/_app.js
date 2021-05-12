import Cursor from "../utils/Cursor";
import Layout from "../components/layout/layout";

import "../styles/css/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Layout />
      <Cursor />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
