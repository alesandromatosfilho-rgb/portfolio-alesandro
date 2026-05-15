import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 450);
          return 100;
        }

        return current + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="loading-orb"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      <h1>Alesandro Matos</h1>
      <p>Carregando experiência interativa...</p>

      <div className="loading-bar">
        <div style={{ width: `${progress}%` }} />
      </div>

      <span>{progress}%</span>
    </motion.div>
  );
}

export default LoadingScreen;
