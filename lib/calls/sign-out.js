export const signOutCall = () => {
  const signOut = window.location.search.includes('sign-out');

  if (signOut) {
    localStorage.removeItem('weLoginKey');

    location.href = '/';
  }
};
