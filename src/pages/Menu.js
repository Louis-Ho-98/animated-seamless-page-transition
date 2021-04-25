import React, { useContext, useState, useEffect } from "react";
import "../App.css";
import { motion } from "framer-motion";
import Dragable from "../components/Dragable";
import { PageVariantsContext } from "../App";

const InnerComponent = () => {
  return <p1>Drag Up</p1>;
};

export default function Menu({ pathname }) {
  const { pageVariantsContext, updatePageVariantsConetxt } = useContext(
    PageVariantsContext
  );

  const [pageVariants, setPageVariants] = useState(
    pageVariantsContext[pathname]
      ? pageVariantsContext[pathname]
      : {
          initial: { y: 0 },
          in: { y: 0 },
          out: { y: 0 },
        }
  );
  useEffect(() => {
    setPageVariants(pageVariantsContext[pathname]);
  }, [pageVariantsContext]);

  const pageTransition = {
    transition: "linear",
    duration: 0.8,
  };

  return (
    <motion.div
      className="bg-blue-300 h-screen w-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute" }}
    >
      <div className="h-50 w-100">
        <text className="color-blue text-6xl text-center">Menu</text>
      </div>
      <Dragable
        backgroundColor="bg-green-300"
        position="bottom"
        dragDirection="y"
        dragPixelToTrigger={5}
        directTo="/home"
        height="48"
        width="screen"
        currentPage={pathname}
        updatePageVariantsConetxt={updatePageVariantsConetxt}
        InnerComponent={InnerComponent}
      />
    </motion.div>
  );
}
