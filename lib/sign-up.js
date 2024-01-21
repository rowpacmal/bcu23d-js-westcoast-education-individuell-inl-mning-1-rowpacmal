import { createStudentForm } from '/components/user-form.js';
import { appManager } from '/lib/app.js';
import { convertFormData } from '/utils/tools.js';

const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

main.appendChild(createStudentForm());

const form = document.querySelector('#signUpForm');
const password = document.querySelector('#password');
const button = document.querySelector('#showEye');
const eye = document.querySelector('#eye');

const addUser = async (e) => {
  e.preventDefault();

  const data = convertFormData(form);
  data.postNo = parseInt(data.postNo);
  data.enrolledCourses = [];

  const users = await appManager.get('students');
  const find = users.find((user) => user.email === data.email);

  if (find) {
    alert(
      'That email address is already registered in our system. Please try another email address.'
    );
    return;
  }

  await appManager.add('students', data);
};

const showPassword = () => {
  const type = password.getAttribute('type');
  if (type === 'password') {
    password.setAttribute('type', 'text');
    eye.classList.add('bi-eye-slash-fill');
    eye.classList.remove('bi-eye-fill');
  } else {
    password.setAttribute('type', 'password');
    eye.classList.add('bi-eye-fill');
    eye.classList.remove('bi-eye-slash-fill');
  }
};

form.addEventListener('submit', addUser);
button.addEventListener('click', showPassword);
