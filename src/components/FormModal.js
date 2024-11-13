// src/components/FormModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormModal = ({ show, handleClose, fields, initialData, onSubmit }) => {
  const [formData, setFormData] = useState({});

  // Initialize form data with `initialData` when editing
  useEffect(() => {
    const populateData = {};
    
    fields.forEach((field) => {
      // Handle nested IDs (e.g., operationId, toolId)
      if (field.name === 'operationId' && initialData?.id?.operationID) {
        populateData[field.name] = initialData.id.operationID;
      } else if (field.name === 'toolId' && initialData?.id?.toolID) {
        populateData[field.name] = initialData.id.toolID;
      } else {
        populateData[field.name] = initialData ? initialData[field.name] : '';
      }
    });

    setFormData(populateData);
  }, [initialData, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = { ...formData };

    if (formData.operationId || formData.toolId) {
      submitData.id = {
        operationID: formData.operationId,
        toolID: formData.toolId,
      };
      delete submitData.operationId;
      delete submitData.toolId;
    }

    onSubmit(submitData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? "Edit Record" : "Add Record"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Form.Group controlId={field.name} key={field.name}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                readOnly={field.readOnly && !!initialData} // Make read-only for IDs during edit
                required={field.required}
              />
            </Form.Group>
          ))}
          <Button type="submit" variant="primary" className="mt-3">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
