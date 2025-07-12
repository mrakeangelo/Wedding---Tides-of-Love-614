import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      <svg
        className="absolute bottom-0 left-0 w-full h-32 text-ocean-200 opacity-30"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          animate={{
            d: [
              "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
              "M0,80 C150,40 350,120 600,80 C850,40 1050,120 1200,80 L1200,120 L0,120 Z",
              "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </svg>
    </div>
  );
};

export default WaveBackground;