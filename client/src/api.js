import { get, post } from '@/shared/utils/http';

export const signIn = data => post('/auth/signin/', data);
export const signUp = data => post('/auth/signup/', data);
export const getToken = () => get('/auth/token/');
export const testAuth = () => get('/auth/');
