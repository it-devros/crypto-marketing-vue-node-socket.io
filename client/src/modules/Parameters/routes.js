import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import navigationGuard from '@/shared/utils/navigationGuard';

import storeModule from './store';

import ParametersLayout from './containers/ParametersLayout';
import ParametersPage from './containers/ParametersPage';

export default {
  path: '/parameters',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.dashboard) {
      store.registerModule('parameters', storeModule);
    }
    store.commit('global/auth/checkAuth');
    navigationGuard(store, next);
  },
  children: [
    {
      path: '',
      component: ParametersLayout,
      children: [
        {
          path: '',
          name: 'parameters',
          component: ParametersPage,
        },
      ],
    },
  ],
};
