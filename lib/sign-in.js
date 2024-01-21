import { appManager } from '/lib/app.js';
import { createSignIn } from '/components/sign-in.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

main.appendChild(createSignIn());

const form = document.querySelector('#signInForm');

const validateUser = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const users = await appManager.get('students');
  const find = users.find(
    (user) => user.email === username && user.password === password
  );

  if (find) {
    localStorage.setItem('weCacheKey', find.id);

    location.href = `/`;
  } else {
    alert('Please enter a valid username and password');
  }
};

form.addEventListener('submit', validateUser);
