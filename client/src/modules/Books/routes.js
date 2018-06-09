import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import navigationGuard from '@/shared/utils/navigationGuard';

import storeModule from './store';

import BooksLayout from './containers/BooksLayout';
import BooksPage from './containers/BooksPage';

export default {
  path: '/books',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.dashboard) {
      store.registerModule('books', storeModule);
    }
    store.commit('global/auth/checkAuth');
    navigationGuard(store, next);
  },
  children: [
    {
      path: '',
      component: BooksLayout,
      children: [
        {
          path: '',
          name: 'books',
          component: BooksPage,
        },
      ],
    },
  ],
};
