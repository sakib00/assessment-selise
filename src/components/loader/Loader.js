import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Loader.css';

const variants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='fixed inset-0 h-full w-full flex items-center justify-center bg-white z-10'
          variants={variants}
          initial='initial'
          exit='exit'
        >
          <div class='la-ball-scale-ripple-multiple la-3x'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
