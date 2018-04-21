import store from '@/shared/store';
import AuthLayout from '@/layouts/AuthLayout';

import storeModule from './store';

import LoginLayout from './containers/LoginLayout';
import LoginPage from './containers/LoginPage';

export default {
  path: '/auth',
  component: AuthLayout,
  beforeEnter(to, from, next) {
    store.registerModule('login', storeModule);
    if (store.getters['global/auth/isAuthenticated']) {
      return next('/dashboard');
    }
    return next();
  },
  children: [
    {
      path: '',
      component: LoginLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
        },
      ],
    },
  ],
};
