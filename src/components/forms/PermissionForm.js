import React from 'react';
import { PERMISSION_MODULES } from '../../constants/permissions';

const PermissionForm = ({ initialData, onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    onSubmit({
      name: formData.get('name'),
      description: formData.get('description'),
      module: formData.get('module')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Permission Name</label>
        <input
          type="text"
          name="name"
          defaultValue={initialData?.name}
          placeholder="e.g., users:read"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          defaultValue={initialData?.description}
          placeholder="Describe what this permission allows"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Module</label>
        <select
          name="module"
          defaultValue={initialData?.module}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          {Object.values(PERMISSION_MODULES).map((module) => (
            <option key={module} value={module}>
              {module}
            </option>
          ))}
        </select>
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

export default PermissionForm;