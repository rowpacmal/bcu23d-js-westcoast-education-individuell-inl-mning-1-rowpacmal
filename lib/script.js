import { checkCurrentPage } from './locations.js';
import { signOutCall } from './calls/sign-out-call.js';

const initApp = () => {
  checkCurrentPage();

  signOutCall();
};

document.addEventListener('DOMContentLoaded', initApp);
