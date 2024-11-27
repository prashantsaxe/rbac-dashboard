import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animations';
import Card from './Card';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
  ]);

  return (
    <Card title="User Management">
      <motion.ul variants={slideIn}>
        {users.map(user => (
          <motion.li 
            key={user.id}
            className="bg-gray-100 rounded p-4 mb-2 flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{user.name}</span>
            <span className="text-sm text-gray-600">{user.role}</span>
            <span className={`px-2 py-1 rounded ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} text-white text-xs`}>
              {user.status}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </Card>
  );
};

export default UserManagement;

