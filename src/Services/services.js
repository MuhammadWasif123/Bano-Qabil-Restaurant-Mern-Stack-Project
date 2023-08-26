// import { parse } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';

export const getAll = async () => {
  const { data } = await axios.get('/api/foods');
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('/api/foods/search/' + searchTerm);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get('/api/foods/tags');
  return data;
};

export const getAllByTag = async tag => {
  if (tag === 'All') return getAll();
  const { data } = await axios.get('/api/foods/tag/' + tag);
  return data;
};

export const getById = async foodId => {
  const { data } = await axios.get('/api/foods/' + foodId);
  return data;
};



// For USERS SERVICES

export const getUser = () => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;  

export const login = async (email, password) => {
  const {data} = await axios.post('api/users/login', {email, password});
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () =>{
  localStorage.removeItem('user');
  window.location.reload(false);
};

