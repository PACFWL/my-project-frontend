import { API_URL } from '@env';
import { authHeaders, handleResponse } from './utils';

export const getGames = async () => {
  const headers = await authHeaders();
  const response = await fetch(`${API_URL}/games`, {
    headers,
  });
  return handleResponse(response);
};

export const getGame = async (id) => {
  const headers = await authHeaders();
  const response = await fetch(`${API_URL}/games/${id}`, {
    headers,
  });
  return handleResponse(response);
};

export const createGame = async (formData) => {
  const headers = await authHeaders();
  console.log('FormData being sent:', formData);
  const response = await fetch(`${API_URL}/games`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });
  return handleResponse(response);
};

export const updateGame = async (id, formData) => {
  const headers = await authHeaders();
  const response = await fetch(`${API_URL}/games/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });
  return handleResponse(response);
};

export const deleteGame = async (id) => {
  const headers = await authHeaders();
  const response = await fetch(`${API_URL}/games/${id}`, {
    method: 'DELETE',
    headers,
  });
  return handleResponse(response);
};
