import { checkCurrentPage } from './locations.js';
import { signOutCall } from './calls/sign-out-call.js';

const initApp = () => {
  signOutCall();

  checkCurrentPage();
};

document.addEventListener('DOMContentLoaded', initApp);
