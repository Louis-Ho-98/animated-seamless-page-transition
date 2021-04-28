import * as React from "react";
import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function SlideUpToGrow({ triggerAnimation }) {
  const constraintsRef = useRef(null);
  const [startPoint, setStartPoint] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const isToAnimate = (endPoint) => {
    if (endPoint - startPoint >= 5) {
      //如果已经在底部，向下滑无效
      if (startAnimation) {
        triggerAnimation();
        setStartAnimation(false);
      }
    } else if (endPoint - startPoint <= -5) {
      //如果已经在顶部，向上滑无效
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

// const Dragable = ({
//   backgroundColor,
//   position,
//   dragDirection,
//   dragPixelToTrigger,

//   height,
//   width,

// }) => {
//   const [startPoint, setStartPoint] = useState(false);

//   const constraintsRef = useRef(null);
//   const x = useMotionValue(0);

//   const isToRedirect = (endPoint) => {
//     const newPageVariantsContext = pageVariantsContextsMaker(
//       currentPage,
//       directTo,
//       position
//     );
//     updatePageVariantsConetxt(newPageVariantsContext);

//     if (Math.abs(startPoint - endPoint) >= dragPixelToTrigger) {
//       history.push(directTo);
//     }
//   };

//   return (
//     <motion.div
//       ref={constraintsRef}
//       class={`h-${height} absolute ${position}-0 w-${width}`}
//     >
//       <motion.div
//         class={`h-${height} w-${width} ${backgroundColor}`}
//         drag={dragDirection}
//         dragConstraints={constraintsRef}
//         style={{ x }}
//         dragElastic={0.05}
//         onDragStart={(event, info) => {
//           setStartPoint(info.point[dragDirection]);
//         }}
//         onDragEnd={(event, info) => {
//           isToRedirect(info.point[dragDirection]);
//         }}
//       >

//       </motion.div>
//     </motion.div>
//   );
// };

// export default Dragable;
