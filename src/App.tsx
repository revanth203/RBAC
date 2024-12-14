import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserTable from './components/UserTable';
import RoleTable from './components/RoleTable';
import Modal from './components/Modal';
import UserForm from './components/forms/UserForm';
import RoleForm from './components/forms/RoleForm';
import { mockUsers, mockRoles } from './data/mockData';
import { User, Role } from './types';
import { Plus } from 'lucide-react';
import { useModal } from './hooks/useModal';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  
  const userModal = useModal();
  const roleModal = useModal();

  // User CRUD operations
  const handleAddUser = (userData: Omit<User, 'id'>) => {
    const newUser = {
      ...userData,
      id: (users.length + 1).toString(),
    };
    setUsers([...users, newUser]);
    userModal.closeModal();
  };

  const handleEditUser = (user: User) => {
    userModal.openModal(user);
  };

  const handleUpdateUser = (userData: Omit<User, 'id'>) => {
    setUsers(users.map(user => 
      user.id === userModal.data.id ? { ...userData, id: user.id } : user
    ));
    userModal.closeModal();
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Role CRUD operations
  const handleAddRole = (roleData: Omit<Role, 'id'>) => {
    const newRole = {
      ...roleData,
      id: (roles.length + 1).toString(),
    };
    setRoles([...roles, newRole]);
    roleModal.closeModal();
  };

  const handleEditRole = (role: Role) => {
    roleModal.openModal(role);
  };

  const handleUpdateRole = (roleData: Omit<Role, 'id'>) => {
    setRoles(roles.map(role => 
      role.id === roleModal.data.id ? { ...roleData, id: role.id } : role
    ));
    roleModal.closeModal();
  };

  const handleDeleteRole = (roleId: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter(role => role.id !== roleId));
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">{users.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Active Roles</h3>
              <p className="text-3xl font-bold text-green-600">{roles.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
              <p className="text-3xl font-bold text-purple-600">24</p>
            </div>
          </div>
        );
      case 'users':
        return (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">User Management</h2>
              <button
                onClick={() => userModal.openModal()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                <span>Add User</span>
              </button>
            </div>
            <UserTable
              users={users}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
            <Modal
              isOpen={userModal.isOpen}
              onClose={userModal.closeModal}
              title={userModal.data ? 'Edit User' : 'Add User'}
            >
              <UserForm
                initialData={userModal.data}
                onSubmit={userModal.data ? handleUpdateUser : handleAddUser}
                onCancel={userModal.closeModal}
              />
            </Modal>
          </>
        );
      case 'roles':
        return (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Role Management</h2>
              <button
                onClick={() => roleModal.openModal()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                <span>Add Role</span>
              </button>
            </div>
            <RoleTable
              roles={roles}
              onEdit={handleEditRole}
              onDelete={handleDeleteRole}
            />
            <Modal
              isOpen={roleModal.isOpen}
              onClose={roleModal.closeModal}
              title={roleModal.data ? 'Edit Role' : 'Add Role'}
            >
              <RoleForm
                initialData={roleModal.data}
                onSubmit={roleModal.data ? handleUpdateRole : handleAddRole}
                onCancel={roleModal.closeModal}
              />
            </Modal>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">{renderContent()}</main>
    </div>
  );
}

export default App;