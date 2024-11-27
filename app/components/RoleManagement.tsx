import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animations';
import Card from './Card';

const RoleManagement: React.FC = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  return (
    <Card title="Role Management">
      <motion.ul variants={slideIn}>
        {roles.map(role => (
          <motion.li 
            key={role.id}
            className="bg-gray-100 rounded p-4 mb-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="font-semibold">{role.name}</h3>
            <div className="mt-2">
              {role.permissions.map(permission => (
                <span key={permission} className="inline-block bg-blue-500 text-white rounded px-2 py-1 text-xs mr-2 mb-2">
                  {permission}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Card>
  );
};

export default RoleManagement;

