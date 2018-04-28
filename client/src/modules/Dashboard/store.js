import { ONLINE_SOCKET_SERVICE } from '@/shared/constants/env';
import SocketClient from '@/shared/utils/socketClient';

const initialState = {
	stateFiats: [],
	stateMains: [],
	stateCurrencies: [],
	currencyFilterOption: {},
};

const getters = {
	getFiats: state => state.stateFiats,
	getMains: state => state.stateMains,
	getCurrencies: state => state.stateCurrencies,
};

const actions = {
	connectSocket({ commit }) {
		if (!window.sockclientCrypto) {
			window.sockclientCrypto = new SocketClient({ commit, host: ONLINE_SOCKET_SERVICE });
			return true;
		}
		return false;
	},
};

const mutations = {
	setFiatCurrencies(state, data) {
		if (data.status == '200') {
			state.stateFiats = data.results || [];
		}
	},
	setMainCurrencies(state, data) {
		if (data.status == '200') {
			state.stateMains = data.results || [];
		}
	},
	setCryptoCurrencies(state, data) {
		if (data.status == '200') {
			state.stateCurrencies = data.results || [];
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
