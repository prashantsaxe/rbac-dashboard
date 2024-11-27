import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animations';
import Card from './Card';

const PermissionManagement: React.FC = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'Read', description: 'Can view resources' },
    { id: 2, name: 'Write', description: 'Can create and edit resources' },
    { id: 3, name: 'Delete', description: 'Can remove resources' },
  ]);

  return (
    <Card title="Permission Management">
      <motion.ul variants={slideIn}>
        {permissions.map(permission => (
          <motion.li 
            key={permission.id}
            className="bg-gray-100 rounded p-4 mb-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="font-semibold">{permission.name}</h3>
            <p className="text-sm text-gray-600">{permission.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Card>
  );
};

export default PermissionManagement;

