import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import navigationGuard from '@/shared/utils/navigationGuard';

import storeModule from './store';

import FunctionsLayout from './containers/FunctionsLayout';
import FunctionsPage from './containers/FunctionsPage';

export default {
  path: '/functions',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.dashboard) {
      store.registerModule('functions', storeModule);
    }
    store.commit('global/auth/checkAuth');
    navigationGuard(store, next);
  },
  children: [
    {
      path: '',
      component: FunctionsLayout,
      children: [
        {
          path: '',
          name: 'functions',
          component: FunctionsPage,
        },
      ],
    },
  ],
};
