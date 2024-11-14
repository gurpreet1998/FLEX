// src/components/GenericTable.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

// Helper function for safely accessing nested properties
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
      {data.map((item, index) => {
        // Unique row key using primary fields or fallback to index
        const rowKey = item.toolId || (item.id ? `${item.id.operationID}-${item.id.toolID}` : index);

        return (
          <tr key={`row-${rowKey}-${index}`}>
            {columns.map((col) => {
              // Access nested properties only if required
              const cellValue = col.name === 'operationId' ? getNestedValue(item, 'id.operationID') :
                                col.name === 'toolId' ? item.toolId || getNestedValue(item, 'id.toolID') :
                                item[col.name];

              return <td key={`${col.name}-${index}`}>{cellValue}</td>;
            })}
            <td>
              <Button variant="primary" onClick={() => onEdit(item)}>Edit</Button>
              <Button variant="danger" onClick={() => onDelete(item)}>Delete</Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default GenericTable;
