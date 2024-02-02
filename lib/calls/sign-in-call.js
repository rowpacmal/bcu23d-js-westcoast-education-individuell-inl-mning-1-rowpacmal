import { appManager } from '../appManager.js';
import { sendStatusMassage } from '../../utils/tools.js';

export const signInCall = () => {
  const form = document.querySelector('#signInForm');

  const validateUser = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const users = await appManager.getStudent();
    const find = users.find(
      (user) => user.email === email && user.password === password
    );

    if (find) {
      localStorage.setItem('weLoginKey', find.id);

      if (find.id === 'admin') {
        location.href = '/pages/admin/admin.html';
      } else {
        location.href = `/pages/user.html?id=${find.id}`;
      }
    } else {
      const statusText = 'Please enter a valid username and password';
      sendStatusMassage(statusText, 'warning');
    }
  };

  form.addEventListener('submit', validateUser);
};
