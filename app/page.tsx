'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

const Home: React.FC = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        <UserManagement />
        <RoleManagement />
        <PermissionManagement />
      </motion.div>
    </Layout>
  );
};

export default Home;

