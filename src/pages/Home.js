import React, { useContext, useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import { PageVariantsContext } from "../App";
import Dragable from "../components/Dragable";
import { motion } from "framer-motion";

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

  console.log("context", pageVariantsContext);
  console.log("mount Home", pageVariants);

  return (
    <motion.div
      className="App"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute" }}
    >
      <Dragable
        backgroundColor="bg-gray-300"
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
      <div className="w-screen">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </motion.div>
  );
}
