import * as React from "react";
import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useHistory } from "react-router-dom";
import pageVariantsContextsMaker from "./utils";

const Dragable = ({
  backgroundColor,
  position,
  dragDirection,
  dragPixelToTrigger,
  directTo,
  height,
  width,
  currentPage,
  updatePageVariantsConetxt,
  InnerComponent,
}) => {
  const [startPoint, setStartPoint] = useState(false);

  const constraintsRef = useRef(null);
  // const x = useMotionValue(0);
  const history = useHistory();

  const isToRedirect = (endPoint) => {
    //根据通过组件所在页面位置、 当前页面，以及前往页面更新context参数
    const newPageVariantsContext = pageVariantsContextsMaker(
      currentPage,
      directTo,
      position
    );
    updatePageVariantsConetxt(newPageVariantsContext);
    
    //限定拖动组件只能往一个方向拖动。
    if (position === "bottom") {
      if (endPoint - startPoint <= -dragPixelToTrigger) {
        history.push(directTo);
      }
    } else if (position === "top") {
      if (endPoint - startPoint >= dragPixelToTrigger) {
        history.push(directTo);
      }
    }

    // if (Math.abs(startPoint - endPoint) >= dragPixelToTrigger) {
    //   history.push(directTo);
    // }
  };

  return (
    <motion.div
      ref={constraintsRef}
      className={`h-${height} absolute ${position}-0 w-${width}`}
    >
      <motion.div
        className={`h-${height} w-${width} ${backgroundColor}`}
        drag={dragDirection}
        dragConstraints={constraintsRef}
        // style={{ x }}
        dragElastic={0.05}
        onDragStart={(event, info) => {
          setStartPoint(info.point[dragDirection]);
        }}
        onDragEnd={(event, info) => {
          isToRedirect(info.point[dragDirection]);
        }}
      >
        <InnerComponent />
      </motion.div>
    </motion.div>
  );
};

export default Dragable;
