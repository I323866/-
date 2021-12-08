import axios from 'axios';

let base = 'http://localhost:3000/api/';

export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data.data);
};
export const changepassword = params => {
  return axios.post(`${base}/changepassword`, { params });
};
export const addUser = params => {
  return axios.post(`${base}/adduser`,  params );
};
export const getLicneseById = id => {
  return axios.get(`${base}/licenselistbyid?id=${id}`).then(res => res.data.data);;
};
export const editUser = params => {
  return axios.post(`${base}/updateuser`, params );
};
export const addChildren = params => {
  return axios.post(`${base}/createchildren`, params );
};
export const addLicense = params => {
  return axios.post(`${base}/createlicense`, params );
};

export const deleteUser = params => {
  return axios.post(`${base}/deleteuser`, params );
};

export const getChildrenById = id => {
  return axios.get(`${base}/childrenlistbyid?id=${id}`).then(res => res.data.data);;
};