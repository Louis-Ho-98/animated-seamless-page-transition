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
  const x = useMotionValue(0);
  const history = useHistory();

  const isToRedirect = (endPoint) => {
    const newPageVariantsContext = pageVariantsContextsMaker(
      currentPage,
      directTo,
      position
    );
    updatePageVariantsConetxt(newPageVariantsContext);

    if (Math.abs(startPoint - endPoint) >= dragPixelToTrigger) {
      history.push(directTo);
    }
  };

  return (
    <motion.div
      ref={constraintsRef}
      class={`"h-${height} absolute ${position}-0 w-${width}"`}
    >
      <motion.div
        class={`h-${height} w-${width} ${backgroundColor}`}
        drag={dragDirection}
        dragConstraints={constraintsRef}
        style={{ x }}
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
