export const PERMISSION_MODULES = {
  USERS: 'Users',
  ROLES: 'Roles',
  AUDIT: 'Audit',
  SECURITY: 'Security'
};

export const ACTIONS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
  ALL: '*'
};

export const DEFAULT_PERMISSIONS = [
  {
    id: '1',
    name: 'users:*',
    description: 'Full access to user management',
    module: PERMISSION_MODULES.USERS
  },
  {
    id: '2',
    name: 'roles:*',
    description: 'Full access to role management',
    module: PERMISSION_MODULES.ROLES
  },
  {
    id: '3',
    name: 'audit:*',
    description: 'Full access to audit logs',
    module: PERMISSION_MODULES.AUDIT
  },
  {
    id: '4',
    name: 'users:read',
    description: 'Read-only access to users',
    module: PERMISSION_MODULES.USERS
  },
  {
    id: '5',
    name: 'audit:read',
    description: 'Read-only access to audit logs',
    module: PERMISSION_MODULES.AUDIT
  }
];