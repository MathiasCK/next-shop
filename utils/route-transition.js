import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "./animation";

const RouteTransition = ({ children }) => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};

export default RouteTransition;
