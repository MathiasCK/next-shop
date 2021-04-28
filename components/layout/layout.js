import { useRouter } from "next/router";
import React from "react";
import { Hero } from "../../styles/home/home-styles";
import Navbar from "./navbar/navbar";

const Layout = (props) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname === "/" && <Hero />}

      <main>
        <Navbar />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
