import { appManager } from '/lib/appManager.js';
import { convertFormData, findUserByEmail } from '/utils/tools.js';

export const signOutRequest = () => {
  const signOut = window.location.search.includes('sign-out');

  if (signOut) {
    localStorage.removeItem('weCacheKey');

    location.href = '/';
  }
};

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

    const find = await findUserByEmail(data);

    if (find) {
      alert(
        'That email address is already registered in our system. Please try another email address.'
      );
      return;
    }

    await appManager.addStudent(data);

    const newUser = await findUserByEmail(data);

    localStorage.setItem('weCacheKey', newUser.id);

    const cache = localStorage.getItem('wePageCache');

    if (cache) {
      location.href = `/pages/course-details.html?id=${cache}`;
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

export const signInRequest = () => {
  const form = document.querySelector('#signInForm');

  const validateUser = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const users = await appManager.getStudent();
    const find = users.find(
      (user) => user.email === username && user.password === password
    );

    if (find) {
      localStorage.setItem('weCacheKey', find.id);

      location.href = '/';
    } else {
      alert('Please enter a valid username and password');
    }
  };

  form.addEventListener('submit', validateUser);
};

export const courseDetailsRequest = () => {
  const button = document.querySelector('#enroll');

  const enrollCourse = async () => {
    const path = location.search.split('=')[1];
    const key = localStorage.getItem('weCacheKey');

    if (key) {
      const user = await appManager.getStudent(key);
      const course = await appManager.getCourse(path);

      if (user.enrolledCourses.find((item) => item === course.id)) {
        alert('You have already enrolled in this course.');
      } else {
        user.enrolledCourses.push(course.id);
        course.participants.push(user.id);

        await appManager.updateStudent(user.id, user);
        await appManager.updateCourse(course.id, course);

        alert(`Congratulation, you have enrolled in "${course.title}"!`);
      }
    } else {
      localStorage.setItem('wePageCache', path);

      location.href = '/pages/sign-up.html';
    }
  };

  button.addEventListener('click', enrollCourse);
};

const postCourseRequest = () => {
  const form = document.querySelector('#postCourseForm');

  const postCourse = async (e) => {
    e.preventDefault();

    const data = convertFormData(form);
    data.courseNo = parseInt(data.courseNo);
    data.courseLength = parseInt(data.courseLength);
    data.rating = parseInt(data.rating);
    data.score = parseFloat(data.score);
    data.enrollmentFee = parseFloat(data.enrollmentFee);
    data.coverImage = data.coverImage.name;
    data.participants = [];

    const number = await appManager.getCourse();
    const find = number.find((num) => num.courseNo === data.courseNo);

    if (find) {
      alert(
        'That course number is already registered in our system. Please try another course number.'
      );
      return;
    }

    await appManager.addCourse(data);
  };

  form.addEventListener('submit', postCourse);
};
