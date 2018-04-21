export default (store, next) => {
  if (store.getters['global/auth/isAuthenticated']) {
    return next();
  } else {
  	return next('/auth/login');
  }
};
