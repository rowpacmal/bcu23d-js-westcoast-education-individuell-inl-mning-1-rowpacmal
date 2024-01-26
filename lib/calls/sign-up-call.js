import { appManager } from '../appManager.js';
import { convertFormData, findUserByEmail } from '../../utils/tools.js';

export const signUpCall = () => {
  const form = document.querySelector('#signUpForm');
  const password = document.querySelector('#password');
  const button = document.querySelector('#showEye');
  const eye = document.querySelector('#eye');

  const addUser = async (e) => {
    e.preventDefault();

    const data = convertFormData(form);
    data.postNo = parseInt(data.postNo);
    data.enrolledCourses = [];

    const find = await findUserByEmail(data);

    if (find) {
      alert(
        'That email address is already registered in our system. Please try another email address.'
      );
      return;
    }

    await appManager.addStudent(data);
    await checkPageCache(data);
  };

  const checkPageCache = async (data) => {
    const newUser = await findUserByEmail(data);

    localStorage.setItem('weLoginKey', newUser.id);

    // page cache is used to remember the users current page when they enroll in a course without an account to give a better user experience and flow.
    const pageCache = localStorage.getItem('wePageCache');

    if (pageCache) {
      location.href = `/pages/course-details.html?id=${pageCache}`;
    } else {
      location.href = '/';
    }
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
