'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FadeOnResizeProps {
  children: React.ReactNode;
}

const FadeOnResize = ({ children }: FadeOnResizeProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Initial fade-in
    setKey(prev => prev + 1);

    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      // Debounce resize so animation only triggers after resizing stops
      timeout = setTimeout(() => setKey(prev => prev + 1), 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key} // Changing key triggers fade animation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeOnResize;
