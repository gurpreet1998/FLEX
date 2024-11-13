// src/components/GenericTable.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((value, key) => (value && value[key] !== undefined ? value[key] : ''), obj);
};

const GenericTable = ({ columns, data, onEdit, onDelete }) => (
  <Table striped bordered hover responsive>
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.name}>{col.label}</th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={`${getNestedValue(item, 'id.operationID')}-${getNestedValue(item, 'id.toolID')}-${index}`}>
          {columns.map((col) => (
            <td key={`${col.name}-${index}`}>
              {col.name === 'operationId' ? getNestedValue(item, 'id.operationID') :
               col.name === 'toolId' ? getNestedValue(item, 'id.toolID') :
               getNestedValue(item, col.name)}
            </td>
          ))}
          <td>
            <Button variant="primary" onClick={() => onEdit(item)}>Edit</Button>
            <Button variant="danger" onClick={() => onDelete(item)}>Delete</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default GenericTable;
