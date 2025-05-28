import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Container.module.css";

/* Framer motion variants */
const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

const slideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.8 },
  },
};

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Hallo",
  "សួស្តី",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Initialize dimensions
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Handle word transitions
  useEffect(() => {
    if (index >= words.length - 1) return;

    const delay = index === 0 ? 1000 : 100;
    const timeoutId = setTimeout(() => setIndex(index + 1), delay);

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [index]);

  // Memoize SVG paths to avoid recalculation on every render
  const { initialPath, targetPath } = useMemo(() => {
    const width = dimension.width;
    const height = dimension.height;

    const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`;
    const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height} L0 0`;

    return { initialPath, targetPath };
  }, [dimension.width, dimension.height]);

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  );
}