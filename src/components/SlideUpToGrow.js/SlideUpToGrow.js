import * as React from "react";
import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function SlideUpToGrow({ triggerAnimation }) {
  const constraintsRef = useRef(null);
  const [startPoint, setStartPoint] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const isToAnimate = (endPoint) => {
    if (endPoint - startPoint >= 5) {
      //if postioned on bottom, slide down is not allowed
      if (startAnimation) {
        triggerAnimation();
        setStartAnimation(false);
      }
    } else if (endPoint - startPoint <= -5) {
      //if positioned on top, slide up is not allowed
      if (!startAnimation) {
        triggerAnimation();
        setStartAnimation(true);
      }
    }
  };

  return (
    <motion.div
      className="bg-blue-200 h-3/4 "
      ref={constraintsRef}
      animate={startAnimation ? { y: "-60%" } : { y: 0 }}
      transition={{ transition: "linear", duration: 0.5 }}
    >
      <motion.div
        animate={startAnimation ? { y: "-60%" } : { y: 0 }}
        transition={{ transition: "linear", duration: 0.5 }}
        className="h-full bg-red-200"
        dragConstraints={constraintsRef}
        drag="y"
        dragElastic={0.05}
        onDragStart={(event, info) => {
          setStartPoint(info.point.y);
        }}
        onDragEnd={(event, info) => {
          isToAnimate(info.point.y);
        }}
      >
        <text>Try swipe-up or swipe-down</text>
      </motion.div>
    </motion.div>
  );
}
