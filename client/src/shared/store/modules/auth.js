import { setAuthHeader } from '@/shared/utils/http';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
};

const actions = {
};

const mutations = {
  loggedIn(state, token) {
    window.localStorage.setItem('crypto_token', token);
    state.token = token;
    setAuthHeader(token);
    state.isAuthenticated = true;
  },
  checkAuth(state) {
    const token = window.localStorage.getItem('crypto_token');
    if (token) {
      state.token = token;
      setAuthHeader(token);
      state.isAuthenticated = true;
    }
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
