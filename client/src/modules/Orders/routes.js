import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import navigationGuard from '@/shared/utils/navigationGuard';

import storeModule from './store';

import OrdersLayout from './containers/OrdersLayout';
import OrdersPage from './containers/OrdersPage';

export default {
  path: '/orders',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.dashboard) {
      store.registerModule('orders', storeModule);
    }
    store.commit('global/auth/checkAuth');
    navigationGuard(store, next);
  },
  children: [
    {
      path: '',
      component: OrdersLayout,
      children: [
        {
          path: '',
          name: 'orders',
          component: OrdersPage,
        },
      ],
    },
  ],
};
