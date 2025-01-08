import { API_URL } from '@env';
import { authHeaders, handleResponse } from './utils';

export const getUserProfile = async () => {
  const headers = await authHeaders();
  const response = await fetch(`${API_URL}/users/profile`, {
    headers,
  });
  return handleResponse(response);
};
