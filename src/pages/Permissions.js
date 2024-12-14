import React from 'react';
import { Plus } from 'lucide-react';
import { useModal } from '../hooks/useModal';
import { usePermissions } from '../hooks/usePermissions';
import Modal from '../components/Modal';
import PermissionTable from '../components/permissions/PermissionTable';
import PermissionForm from '../components/forms/PermissionForm';

const Permissions = () => {
  const { permissions, addPermission, updatePermission, deletePermission } = usePermissions();
  const modal = useModal();

  const handleAddPermission = (data) => {
    addPermission(data);
    modal.closeModal();
  };

  const handleEditPermission = (permission) => {
    modal.openModal(permission);
  };

  const handleUpdatePermission = (data) => {
    updatePermission(modal.data.id, data);
    modal.closeModal();
  };

  const handleDeletePermission = (id) => {
    if (window.confirm('Are you sure you want to delete this permission?')) {
      deletePermission(id);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Permission Management</h2>
        <button
          onClick={() => modal.openModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          <span>Add Permission</span>
        </button>
      </div>

      <PermissionTable
        permissions={permissions}
        onEdit={handleEditPermission}
        onDelete={handleDeletePermission}
      />

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.closeModal}
        title={modal.data ? 'Edit Permission' : 'Add Permission'}
      >
        <PermissionForm
          initialData={modal.data}
          onSubmit={modal.data ? handleUpdatePermission : handleAddPermission}
          onCancel={modal.closeModal}
        />
      </Modal>
    </>
  );
};

export default Permissions;