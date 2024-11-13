import React, { useState, useEffect, useCallback } from 'react';
import GenericTable from './GenericTable';
import FormModal from './FormModal';
import { Button } from 'react-bootstrap';

const TableManager = ({ config }) => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const fetchData = useCallback(async () => {
    const result = await config.service.getAll();
    setData(result);
  }, [config.service]);

  // Clear data when switching between tables
  useEffect(() => {
    setData([]); // Clear data when config changes
    fetchData();
  }, [fetchData, config]);

  const handleAdd = () => {
    setFormData(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setShowForm(true);
  };

  const handleDelete = async (item) => {
    const id = item.id; // Use full id as needed, depending on how delete API expects it
    await config.service.delete(id);
    fetchData();
  };
  

  const handleSubmit = async (data) => {
    if (formData) {
      await config.service.update(formData.id, data);
    } else {
      await config.service.create(data);
    }
    fetchData(); // Refresh data after submit
    setShowForm(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleAdd}>Add {config.name}</Button>
      <GenericTable columns={config.fields} data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <FormModal
        show={showForm}
        handleClose={() => setShowForm(false)}
        fields={config.fields}
        initialData={formData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default TableManager;
