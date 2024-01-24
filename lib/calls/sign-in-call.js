import { appManager } from '../appManager.js';

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

      location.href = '/';
    } else {
      alert('Please enter a valid username and password');
    }
  };

  form.addEventListener('submit', validateUser);
};
