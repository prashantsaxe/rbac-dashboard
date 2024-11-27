import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../utils/animations';

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 mb-6"
      variants={scaleIn}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </motion.div>
  );
};

export default Card;

