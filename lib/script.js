import { checkCurrentPage } from '/lib/locations.js';
import { signOutRequest } from '/lib/request.js';

const initApp = () => {
  signOutRequest();

  checkCurrentPage();
};

document.addEventListener('DOMContentLoaded', initApp);
