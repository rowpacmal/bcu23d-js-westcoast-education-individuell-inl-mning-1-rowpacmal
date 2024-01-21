export const signOutRequest = () => {
  const signOut = window.location.search.includes('sign-out');

  if (signOut) {
    localStorage.removeItem('weCacheKey');

    location.href = '/';
  }
};
