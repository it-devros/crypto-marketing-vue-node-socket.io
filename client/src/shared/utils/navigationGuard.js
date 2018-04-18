export default (store, next) => store.dispatch('global/user/isAuthed')
  .then(next)
  .catch((e) => {
    const status = e.response ? e.response.status : 0;
    // eslint-disable-next-line
    console.log(status);
  });
