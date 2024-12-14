import React from 'react';
import { Role } from '../../types';

interface RoleFormProps {
  initialData?: Role;
  onSubmit: (data: Omit<Role, 'id'>) => void;
  onCancel: () => void;
}

const RoleForm: React.FC<RoleFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const permissions = Array.from(formData.getAll('permissions')) as string[];
    
    onSubmit({
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      permissions,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={initialData?.name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          defaultValue={initialData?.description}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
        <div className="space-y-2">
          {['users:*', 'roles:*', 'audit:*', 'audit:read', 'users:read'].map((perm) => (
            <label key={perm} className="flex items-center">
              <input
                type="checkbox"
                name="permissions"
                value={perm}
                defaultChecked={initialData?.permissions.includes(perm)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{perm}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default RoleForm;