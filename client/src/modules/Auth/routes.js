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
    return next();
  },
  children: [
    {
      path: '',
      component: LoginLayout,
      beforeEnter(to, from, next) {
        if (store.getters['global/auth/isAuthenticated']) {
          return next('/dashboard');
        }
        return next();
      },
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
