import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = ({mainPageRef}) => {
  const { scrollYProgress } = useScroll({container: mainPageRef,layoutEffect: false, }); // Get scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("scrollYProgress", value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <motion.div
    style={{
      width: "100%",
      height: "5px",
      backgroundColor: "blue",
      transformOrigin: "left",
      scaleX: scrollYProgress, // Animate progress bar width
    }}
    />
  );
};

export default ScrollProgressBar;
