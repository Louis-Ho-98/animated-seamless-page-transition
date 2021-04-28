import React, { useContext, useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import { PageVariantsContext } from "../App";
import Dragable from "../components/Dragable/Dragable";
import { motion } from "framer-motion";

//build your customized component
const InnerComponent = () => {
  return <p1>Drag Down</p1>;
};

export default function Home({ pathname }) {
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
      className="bg-yellow-300 h-screen w-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute" }}
    >
      <Dragable
        backgroundColor="bg-red-300"
        position="top"
        dragDirection="y"
        dragPixelToTrigger={5}
        directTo="/menu"
        height="48"
        width="screen"
        currentPage={pathname}
        updatePageVariantsConetxt={updatePageVariantsConetxt}
        InnerComponent={InnerComponent}
      />
      <div className="h-50 w-100 absolute bottom-20">
        <text className="color-blue text-6xl text-center">Home</text>
      </div>
    </motion.div>
  );
}
