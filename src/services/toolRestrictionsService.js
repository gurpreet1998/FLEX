// src/services/toolRestrictionsService.js
const API_BASE_URL = 'http://localhost:8080/api/tool-restriction';

export const toolRestrictionsService = {
  getAll: async () => {
    const response = await fetch(API_BASE_URL);
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (id) => {
    await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
  },
};
