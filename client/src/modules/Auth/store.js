import {
  signIn as signInAPI,
  signUp as signUpAPI,
  testAuth as testAuthAPI
} from '@/api';

const initialState = {
};

const getters = {
};

const actions = {
  sendLoginData: ({ commit }, payload) => {
    return signInAPI(payload).then((res) => {
      return res;
    }).catch((err) => {
      throw err;
    });
  },
};

const mutations = {
};


export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
