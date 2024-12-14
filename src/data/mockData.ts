import { User, Role, Permission } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@vrvsecurity.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-03-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@vrvsecurity.com',
    role: 'Security Analyst',
    status: 'active',
    lastLogin: '2024-03-14T16:45:00Z',
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike.c@vrvsecurity.com',
    role: 'Auditor',
    status: 'inactive',
    lastLogin: '2024-03-10T09:15:00Z',
  },
];

export const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access with all permissions',
    permissions: ['users:*', 'roles:*', 'audit:*'],
  },
  {
    id: '2',
    name: 'Security Analyst',
    description: 'Access to security monitoring and analysis tools',
    permissions: ['audit:read', 'users:read'],
  },
  {
    id: '3',
    name: 'Auditor',
    description: 'Read-only access to audit logs and reports',
    permissions: ['audit:read'],
  },
];

export const mockPermissions: Permission[] = [
  {
    id: '1',
    name: 'users:*',
    description: 'Full access to user management',
    module: 'Users',
  },
  {
    id: '2',
    name: 'roles:*',
    description: 'Full access to role management',
    module: 'Roles',
  },
  {
    id: '3',
    name: 'audit:*',
    description: 'Full access to audit logs',
    module: 'Audit',
  },
];