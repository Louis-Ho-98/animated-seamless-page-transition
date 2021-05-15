import React, { useState } from "react";
import SlideUpToReduce from "../components/SlideUpToShrink/SlideUpToShrink";
import SlideUpToGrow from "../components/SlideUpToGrow.js/SlideUpToGrow";

export default function Detail() {
  const [isAnimaTriggered, setIsAnimaTriggered] = useState(false);
  const triggerAnimation = () => {
    setIsAnimaTriggered(!isAnimaTriggered);
  };
  return (
    <div className="h-screen overflow-hidden">
      <SlideUpToReduce isTriggered={isAnimaTriggered} />
      <SlideUpToGrow triggerAnimation={triggerAnimation} />
    </div>
  );
}
