import { useRouter } from "next/router";
import React from "react";
import { Hero } from "../../styles/home/home-styles";
import RouteTransition from "../../utils/route-transition";
import Navbar from "./navbar/navbar";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname === "/" && (
        <RouteTransition>
          <Hero />
        </RouteTransition>
      )}

      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
