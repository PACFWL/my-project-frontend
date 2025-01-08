import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
console.log(API_URL); 

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
};

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Failed to retrieve token', error);
    return null;
  }
};

export const authHeaders = async () => {
  const token = await getAuthToken();
  return {
    'Authorization': `Bearer ${token}`,
  };
};
