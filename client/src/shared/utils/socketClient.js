import io from 'socket.io-client';

export default class SocketClient {
  constructor(options) {
    this.commit = options.commit;
    this.host = options.host;
    if (!this.host) {
      return;
    }
    this.socket = io.connect(this.host, {
      reconnection: true,
      reconnectionDelay: 3000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
    });
    this.socket.on('connect', () => {
      this.setResponseListeners(this.socket);
    });
  }

  emit(event, data) {
    if (!this.socket) {
      return;
    }
    this.socket.emit(event, data);
  }

  setResponseListeners(socket) {
    socket.on('USD_FIAT_PAIRS', (data) => {
      this.commit('setFiatCurrencies', data);
    });
    socket.on('MAIN_CURRENCY_PAIRS', (data) => {
      this.commit('setMainCurrencies', data);
    });
    socket.on('CRYPTO_CURRENCY_PAIRS', (data) => {
      this.commit('setCryptoCurrencies', data);
    });
  }
}

