// src/services/processExclusionsService.js
const API_BASE_URL = '/api/process-exclusions';

export const processExclusionsService = {
    getAll: async (signal) => {
        const response = await fetch(API_BASE_URL, { signal });
        if (!response.ok) {
          throw new Error('Failed to fetch process exclusions');
        }
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
    const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete process exclusion');
  },
};
