import { motion, useScroll, useSpring } from "framer-motion";

const MotionScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  return (
    <motion.div
      style={{ scaleX }}
      className="z-1 absolute -bottom-1 left-0 right-0 h-1 bg-forest-300/95 transform origin-left"
    />
  );
};

export default MotionScroll;
