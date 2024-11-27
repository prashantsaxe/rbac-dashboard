import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">RBAC Dashboard</h1>
        {children}
      </div>
    </motion.div>
  );
};

export default Layout;

