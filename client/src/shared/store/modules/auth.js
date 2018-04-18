// import { setAuthHeader } from '@/shared/utils/http';

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
    state.token = token;
    state.isAuthenticated = true;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
