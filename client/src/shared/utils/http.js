import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import camelize from 'camelize';
import { API_ROOT } from '@/shared/constants/env';

Vue.use(VueAxios, axios.create({
  baseURL: API_ROOT,
  headers: { Accept: 'application/json' },
}));

const API_PATH = API_ROOT;

Vue.axios.defaults.baseURL = API_PATH;

const success = (resolve, response) => resolve(response.data.data);
const successLogin = (resolve, response) => resolve(response.data);
const error = (reject, err) => reject(err);

const request = (method, url, data, config) => new Promise((resolve, reject) => {
  if (!(['get', 'post', 'put', 'patch'].includes(method))) throw new Error(`Http method ${method} does not supported`);

  if (['post', 'put', 'patch'].includes(method)) {
    return Vue.axios({
      method,
      url,
      data,
      ...config,
    }).then(resp => url === '/oauth/token' ? successLogin(resolve, resp) : success(resolve, resp))
    .catch(r => error(reject, r));
  }

  return Vue.axios({
    method,
    url,
    params: data,
    ...config,
  }).then(resp => success(resolve, resp))
    .catch(r => error(reject, r));
});

export const post = (url, data, config) => request('post', url, data, config);
export const get = (url, query, config) => request('get', url, query, config);
export const put = (url, data, config) => request('put', url, data, config);
export const patch = (url, data, config) => request('patch', url, data, config);

export const setAuthHeader = (token) => {
  Vue.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Add a response interceptor
Vue.axios.interceptors.response.use(camelize, error => {
  let er = {};

  switch(error.response.status) {
    case 401:
      // TODO: handle auth rejections
      window.location.href = '/auth/login';
      localStorage.removeItem('token');
      er = error;
      break;

    case 422:
      er = error.response.data;
      break;

    default:
      er = error;
      break;
  }

  return Promise.reject(er);
});


export const uploadFile = (url, file, mime) => fetch(`${API_PATH}/${url}`, { // Your POST endpoint
    method: 'PUT',
    headers: {
      "Content-Type": "image/jpeg",
      "Authorization": Vue.axios.defaults.headers.common.Authorization,
      "Accept": "application/json",
    },
    body: file // This is the content of your file
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
