import { useState } from 'react';
import { DEFAULT_PERMISSIONS } from '../constants/permissions';

export const usePermissions = () => {
  const [permissions, setPermissions] = useState(DEFAULT_PERMISSIONS);

  const addPermission = (permissionData) => {
    const newPermission = {
      ...permissionData,
      id: (permissions.length + 1).toString(),
    };
    setPermissions([...permissions, newPermission]);
  };

  const updatePermission = (id, permissionData) => {
    setPermissions(
      permissions.map((permission) =>
        permission.id === id ? { ...permissionData, id } : permission
      )
    );
  };

  const deletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };

  return {
    permissions,
    addPermission,
    updatePermission,
    deletePermission,
  };
};