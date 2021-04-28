import React, { useState, useEffect } from "react";
import roomImage from "../../assets/images/room.jpg";
import { motion } from "framer-motion";

export default function SlideUpToReduce({ isTriggered }) {
  return (
    <motion.div
      className="px-10 h-2/3 overflow-hidden mb-10"
      animate={isTriggered ? { scaleY: 0.5, y: "-30%" } : { scaleY: 1, y: 0 }}
      transition={{ transition: "linear", duration: 0.5 }}
    >
      <img src={roomImage} className="object-cover h-full w-full" />
    </motion.div>
  );
}
