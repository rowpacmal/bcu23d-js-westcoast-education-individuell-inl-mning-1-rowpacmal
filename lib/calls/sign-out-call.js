export const signOutCall = () => {
  const signOut = window.location.search.includes('sign-out');

  if (signOut) {
    const key = localStorage.getItem('weLoginKey');

    if (key) {
      localStorage.removeItem('weLoginKey');

      location.href = '/';
    }
  }
};
