import { appManager } from '/lib/app.js';
import { convertFormData } from '/utils/tools.js';

export const signUpRequest = () => {
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
};

export const signInRequest = () => {
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
};

export const signOutRequest = () => {
  const signOut = window.location.search.includes('sign-out');

  if (signOut) {
    localStorage.removeItem('weCacheKey');

    location.href = '/';
  }
};

export const courseDetailsRequest = () => {
  const button = document.querySelector('#enroll');

  const enrollCourse = async () => {
    const path = location.search.split('=')[1];
    const key = localStorage.getItem('weCacheKey');
    const user = await appManager.get('students', key);
    const course = await appManager.get('courses', path);

    if (key) {
      if (user.enrolledCourses.find((item) => item === course.id)) {
        alert('You have already enrolled this course.');
      } else {
        user.enrolledCourses.push(course.id);
        course.participants.push(user.id);

        await appManager.update('students', user.id, user);
        await appManager.update('courses', course.id, course);
      }
    } else {
      location.href = '/pages/sign-up.html';
    }
  };

  button.addEventListener('click', enrollCourse);
};
