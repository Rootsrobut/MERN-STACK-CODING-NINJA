import React from "react";
import { motion } from "framer-motion"; // Correct import from 'framer-motion'

function App() {
  return (
    <>
      <div>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 50,
            repeat: Infinity,
            ease: "anticipate",
          }}
        >
          I am web developer
        </motion.h2>

        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600, 0],
            y: [100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600, 0],
            rotate: 230,
          }}
          transition={{ duration: 2, delay: 1 }}
          className="box1"
        ></motion.div>

        <motion.div
          animate={{ x: 1000, rotate: 360 }}
          transition={{ duration: 3, delay: 1 }}
          className="circle"
        ></motion.div>

        <motion.button
          animate={{ x: 100 }}
          whileHover={{ scale: 1.2, backgroundColor: "#61dafb", color: "#222" }}
          whileTap={{ scale: 0.9, backgroundColor: "#21a1f3" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Subscribe
        </motion.button>
      </div>

      <motion.div
        whileHover={{ backgroundColor: "greenyellow", scale: 0.8, rotate: 10 }}
        whileTap={{ scale: 0.8, rotate: -10 }}
        drag
        whileDrag={{ scale: 1.1, boxShadow: "0px 0px 20px #333" }}
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
        className="box1"
      ></motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#ff4081",
          margin: "20px auto",
        }}
      />
    </>
  );
}

export default App;
